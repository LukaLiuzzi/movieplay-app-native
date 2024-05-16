import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import StackNavigation from './src/screens/Navigations/StackNavigation.jsx';
import TabNavigation from './src/screens/Navigations/TabNavigation.jsx';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#3A7CA5" />
        <StackNavigation />
        {/* <TabNavigation /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
