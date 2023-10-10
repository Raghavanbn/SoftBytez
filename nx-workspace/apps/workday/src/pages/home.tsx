import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Initiate the login process and redirect to Auth0 login page
    loginWithRedirect();   
    isAuthenticated ? navigate('/profile') : navigate('/');
  };


  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLoginClick}>Login</button>

      
    </div>
  );
}

export default HomePage;
