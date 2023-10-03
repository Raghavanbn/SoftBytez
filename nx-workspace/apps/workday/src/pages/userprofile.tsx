// src/components/UserProfile.js

import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function UserProfile() {
  const { isAuthenticated, getAccessTokenSilently, user, } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

 

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          const response = await fetch('https://dev-qwjztbqacvm0sled.uk.auth0.com/userinfo', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await response.json();
          setUserInfo(data);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      })();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  // Render the user profile data once it's available
  if (userInfo) {
    return (
      <div>
        <h2>Welcome, {user?.name}</h2>
        {/* Display other user information */}
      </div>
    );
  } else {
    return <div>Loading user profile...</div>;
  }
}

export default UserProfile;
