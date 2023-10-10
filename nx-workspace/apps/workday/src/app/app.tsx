// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Routes, Route, useNavigate  } from 'react-router-dom';
import PrivateRoute from '../pages/privateroute';
import UserProfile from '../pages/userprofile';
import Home from '../pages/home';
import { Auth0Provider } from '@auth0/auth0-react';


export function App() {

  return (
    <Auth0Provider
      domain="dev-qwjztbqacvm0sled.uk.auth0.com"
      clientId="F60Jeo1DwRJlLM4RmGRn8CK1y4kvD9Sj"
      authorizationParams={{
        redirect_uri: 'http://localhost:4200/profile'
      }}
      //onRedirectCallback={onRedirectCallback }
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
