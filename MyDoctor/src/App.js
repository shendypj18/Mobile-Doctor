import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Splash, GetStarted} from './pages';
import {Router} from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
