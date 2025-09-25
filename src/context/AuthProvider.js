
import { createContext,  useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    id:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const [token,setToken] = useState('');
  const navigate = useNavigate();

  // check if user exists in localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

     const fetchUser = async () => {
       try {
         const response = await fetch("http://localhost:4000/users/", {
           method: "GET",
           headers: {
             "Content-Type": "application/json",
             authorization: `Bearer ${token}`,
           },
         });
 
         const result = await response.json();
         if (response.status === 200 && result.user) {
           localStorage.setItem("user", JSON.stringify(result.user));
           setUser(result.user);
           setIsAuthenticated(true);
         }
       } catch (err) {
         console.log(err);
       }
     }
   const login = (userData,token) => {
     localStorage.setItem("user", JSON.stringify(userData));
     localStorage.setItem('token', token);
     setUser(userData);
     setToken(token);
     setIsAuthenticated(true);
   };

   const logout = () => {
     setUser(null);
     localStorage.removeItem("user");
     localStorage.removeItem("token");
     setIsAuthenticated(false);
     setToken('');
     navigate("/");};

  return (
    <AuthContext.Provider value={{ user, login, isAuthenticated,  fetchUser ,setUser}}>
      {children}
    </AuthContext.Provider>
  );
};


