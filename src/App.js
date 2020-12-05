/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigators/Stack';
import {navigationRef} from './navigators/RootNavigation';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
