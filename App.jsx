import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import StackNavigation from './src/screens/Navigations/StackNavigation.jsx';
import TabNavigation from './src/screens/Navigations/TabNavigation.jsx';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#3A7CA5" />
      {/* <StackNavigation /> */}
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
