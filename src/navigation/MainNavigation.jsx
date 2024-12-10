import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Introduction from "../screens/Introduction";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Introduction"
        screenOptions={{
          animation: "fade_from_bottom",
        }}
      >
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
