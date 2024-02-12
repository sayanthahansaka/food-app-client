import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LodingSpinner'; // Corrected typo

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // Show loading spinner while authentication status is being checked
    return <LoadingSpinner />;
  }

  if (user) {
    // If user is authenticated, render the children
    return children;
  } else {
    // If user is not authenticated, redirect to signup page
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
