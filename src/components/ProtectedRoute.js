import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/slices/authSlice'; // Adjust path as necessary

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
