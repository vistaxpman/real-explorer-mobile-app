import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {SignIn} from '../screens';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
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
