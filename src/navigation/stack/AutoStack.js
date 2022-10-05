import React from 'react';
import SplashScreen from '../../screen/SplashScreen';
import MainScreen from '../../screen/authScreen/MainScreen'



export const AutoStack = () => (
  <Stack.Navigator>
  <Stack.Group>
    <Stack.Screen
      name="splash"
      component={SplashScreen}
      options={{headerShown: false}}
    />

<Stack.Screen
      name="MainScreen"
      component={MainScreen}
    />

    </Stack.Group>
  </Stack.Navigator>
);
