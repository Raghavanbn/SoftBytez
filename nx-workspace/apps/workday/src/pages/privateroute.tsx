import React from 'react';
import { Outlet,  useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/');
    return null; // Redirect to the home page if not authenticated
  } else{
    navigate('/profile');
  }

  return <Outlet />;
};

export default PrivateRoute;
