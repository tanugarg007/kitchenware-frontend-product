import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
const {logout} = useContext(AuthContext);
  const handleOnClick = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    logout();
    navigate('/'); // redirect to home page after logout
  };

  return (
    <div>
      <button 
        onClick={handleOnClick} 
        className="text-black bg-white px-4 py-2 rounded"
      >
        Logout 
        
      </button>
    </div>
  );
};

export default Logout;
