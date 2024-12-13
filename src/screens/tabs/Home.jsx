import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS, PADDING, PADDING_SM, WIDTH } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Slider from "../../components/Slider";
import HomeHeader from "../../components/HomeHeader";

const Home = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const navigation = useNavigation();

  const handleSlideChange = event => {
    setActiveSlide(event.nativeEvent.position);
  };

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
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.viewContainer}>
        <View>
          <TouchableOpacity onPress={toggleMenu}>
            <MaterialIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <HomeHeader />
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}></View>

          {/* Slider */}
          <View style={styles.sliderContainer}>
            <Slider
              styles={styles}
              activeSlide={activeSlide}
              handleSlideChange={handleSlideChange}
              PADDING_SM={PADDING_SM}
            />
          </View>
        </View>

        {/* Hamburger Menu */}
        {isMenuVisible && (
          <SafeAreaView style={styles.menu} edges={["top", "left", "right"]}>
            <View style={styles.menuView}>
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
            </View>
          </SafeAreaView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: PADDING_SM,
  },
  content: {
    flex: 1,
  },
  // Header
  headerContainer: {
    borderColor: COLORS.inActiveLine,
    borderWidth: 1,
    padding: PADDING_SM,
    borderRadius: 20,
    marginVertical: PADDING,
  },

  // Main Content
  mainContent: {
    flex: 1,
    marginVertical: "auto",
  },
  // Slider
  sliderContainer: {
    height: WIDTH / 3,
    marginBottom: PADDING_SM,
  },

  // Hamburger Menu
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: WIDTH / 2,

    backgroundColor: COLORS.primary,
    zIndex: 2,
  },
  menuView: {
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
