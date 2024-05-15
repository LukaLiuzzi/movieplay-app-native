import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../Account';
import EditAccount from '../account/EditAccount';

const Stack = createNativeStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: true,
          headerTitle: 'Editar Cuenta',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#C1DCF2',
            height: 101,
          },
          headerTintColor: '#0B3750',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
          },
        }}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={{
          headerShown: true,
          headerTitle: 'Editar Cuenta',
          headerStyle: {
            backgroundColor: '#C1DCF2',
            height: 101,
          },
          headerTintColor: '#0B3750',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
