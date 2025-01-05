import React from 'react';
import { Route} from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, useTheme } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import About from '../pages/about';
import Cart from '../pages/cart';
import NavigationMenu from './navigation';
import GamePage from '../pages/game';
import AccountPage from '../pages/account';
import NotificationPage from '../pages/notification';

const MyApp = () => 
{
  return   (
  
    <RecoilRoot>
      <App > 
        <SnackbarProvider>
       
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/game" element={<GamePage></GamePage>}></Route>
              <Route path="/notification" element={<NotificationPage></NotificationPage>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/account" element={<AccountPage></AccountPage>}></Route>
            </AnimationRoutes>
        <NavigationMenu/>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  )
}  

export default MyApp;