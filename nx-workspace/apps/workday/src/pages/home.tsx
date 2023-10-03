import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import UserProfile from './userprofile';

function HomePage() {
  const { loginWithRedirect } = useAuth0();

  const handleLoginClick = () => {
    // Initiate the login process and redirect to Auth0 login page
    loginWithRedirect();
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLoginClick}>Login</button>

      <UserProfile/>
    </div>
  );
}

export default HomePage;
