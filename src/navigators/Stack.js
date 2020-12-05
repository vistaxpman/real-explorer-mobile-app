import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {SignIn, Auth, Onboarding, SplashScreen} from '../screens';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({navigation}) => ({
          headerShown: true,
          headerTitleStyle: {
            fontSize: 17,
            alignSelf: 'center',
            marginRight: 50,
          },
          title: 'SignUp',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => {
                navigation.pop();
              }}
            />
          ),
        })}
      /> */}
    </Stack.Navigator>
  );
}

export default AppStack;
