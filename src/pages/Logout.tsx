import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext) as any;

  useEffect(() => {
    logout();               // Clear user and token
    navigate('/');     // Redirect to login page
  }, [logout, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Logging out...</p>
    </div>
  );
};
