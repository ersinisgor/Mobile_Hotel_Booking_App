import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS, PADDING, PADDING_SM, WIDTH } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";

const Home = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigation = useNavigation();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out");
      navigation.navigate("Introduction");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleMenu}>
          <MaterialIcons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Hamburger Menu */}
      {isMenuVisible && (
        <SafeAreaView style={styles.menu}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <MaterialIcons name="close" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              toggleMenu();
              navigation.navigate("EditProfile");
            }}
          >
            <MaterialCommunityIcons
              name="account-edit"
              size={24}
              color="#fff"
            />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </TouchableOpacity>

          <View style={styles.menuItem}>
            <Ionicons name="moon" size={21} color="#fff" />
            <Text style={styles.menuItemText}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="#fff" />
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: PADDING_SM,
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: WIDTH / 2,
    backgroundColor: COLORS.primary,
    padding: PADDING,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: WIDTH / 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  menuItemText: {
    marginLeft: 16,
    color: "#fff",
    fontSize: 16,
  },
});
