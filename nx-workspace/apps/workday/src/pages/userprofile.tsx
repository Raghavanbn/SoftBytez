// src/components/UserProfile.js

import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

//redux- code
import { useDispatch, useSelector  } from 'react-redux';
import RootState  from '../redux/RootState';

function UserProfile() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0(); 
  
  //redux- code
  const dispatch = useDispatch();
  const userDetails = useSelector((state: RootState) => state.user.user);

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
          // redux-code
          const user = data;
          dispatch({ type: 'SET_USER', payload: user });

        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      })();
    }
  }, [isAuthenticated, getAccessTokenSilently, dispatch]);

  // Render the user profile data once it's available
  
    return (
      <div>        
        <h3> Hello, {userDetails?.name}</h3>
        {/* Display other user information */}
      </div>
    );
  
}

export default UserProfile;
