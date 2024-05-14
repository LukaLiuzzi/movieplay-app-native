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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={{
          headerShown: true,
          headerTitle: 'Editar Perfil',
        }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
