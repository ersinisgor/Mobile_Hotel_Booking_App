import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/auth/Login";
import Introduction from "../screens/Introduction";
import Signup from "../screens/auth/Signup";
import BottomNavigation from "./BottomNavigation";
import EditProfile from "../screens/EditProfile";
import ListHotels from "../screens/ListHotels";
import HotelDetails from "../screens/HotelDetails";

const Stack = createStackNavigator();

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
          options={{ headerShown: false, animation: "fade_from_bottom" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            animation: "fade_from_bottom",
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            animation: "fade_from_bottom",
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={BottomNavigation}
          options={{ headerShown: false, animation: "fade_from_bottom" }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            animation: "fade_from_bottom",
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Stack.Screen
          name="ListHotels"
          component={ListHotels}
          options={{
            animation: "fade_from_bottom",
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
