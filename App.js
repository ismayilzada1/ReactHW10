import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import FeedScreen from "./src/screens/FeedScreen/FeedScreen"
import {NavigationContainer} from "@react-navigation/native";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen
              name="Feed"
              component={FeedScreen}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}/>

        </Stack.Navigator>
      </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
