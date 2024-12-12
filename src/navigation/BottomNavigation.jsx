import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabs/Home";
import Booked from "../screens/tabs/Booked";
import Favourite from "../screens/tabs/Favourite";
import Profile from "../screens/tabs/Profile";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { COLORS } from "../utils/constants";

const Tabs = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLORS.inActiveTab,
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="home" size={17} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Booked"
        component={Booked}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="nav-icon-list-a" size={17} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="heart" size={17} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={19} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
