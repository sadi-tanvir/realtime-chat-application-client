import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';



const CheckLoginAuth = ({ children }) => {
  // redux
  const { isAuthenticate } = useSelector(state => state.authReducer)

  let location = useLocation();


  if (isAuthenticate) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}


export default CheckLoginAuth