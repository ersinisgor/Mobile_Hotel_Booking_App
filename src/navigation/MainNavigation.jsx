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
import BookingForm from "../screens/BookingForm";
import BookSummary from "../screens/BookSummary";

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
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetails}
          options={{ headerShown: false, animation: "fade_from_bottom" }}
        />
        <Stack.Screen
          name="BookingForm"
          component={BookingForm}
          options={{
            animation: "fade_from_bottom",
            title: "Booking Form",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Poppins-SemiBold", fontSize: 20 },
          }}
        />
        <Stack.Screen
          name="BookSummary"
          component={BookSummary}
          options={{
            animation: "fade_from_bottom",
            title: "Booking Summary",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Poppins-SemiBold", fontSize: 20 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
