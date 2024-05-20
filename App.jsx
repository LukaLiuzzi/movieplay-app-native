import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import StackNavigation from './src/screens/Navigations/StackNavigation.jsx';
import TabNavigation from './src/screens/Navigations/TabNavigation.jsx';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/configureStore.js';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#3A7CA5" />
            <StackNavigation />
            {/* <TabNavigation /> */}
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
