// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {Routes, Route, useNavigate  } from 'react-router-dom';
import PrivateRoute from '../pages/privateroute';
import UserProfile from '../pages/userprofile';
import Home from '../pages/home';
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';


export function App() {

  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const onRedirectCallback = () => {
    // Check if the user is authenticated
    if (isAuthenticated) {
      // If authenticated, you can perform additional logic here if needed
      console.log('Authentication successful');
      
      // For example, you can redirect the user to a specific page
      navigate('/profile');
    } else {
      // Handle the case when authentication fails
      console.error('Authentication failed');
    }
  };
  return (
    // <div>
    //   <Routes>
    //     <Route path='/' element={<Home/>}></Route>
    //     <Route path="/profile" element={<PrivateRoute />}>
    //       <Route index element={<UserProfile />} />
    //     </Route>
    //   </Routes>
      

    // </div>
    <Auth0Provider
      domain="dev-qwjztbqacvm0sled.uk.auth0.com"
      clientId="F60Jeo1DwRJlLM4RmGRn8CK1y4kvD9Sj"
      authorizationParams={{
        redirectUri: window.location.origin
      }}
    >
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path="/profile" element={<PrivateRoute />}>
           <Route index element={<UserProfile />} />
         </Route>
       </Routes>
      </div>
    </Auth0Provider>
  );
}

export default App;
