import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, PADDING, PADDING_SM, WIDTH } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Slider from "../../components/Slider";
import HomeHeader from "../../components/HomeHeader";
import HamburgerMenu from "../../components/HamburgerMenu";

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
          <HamburgerMenu
            toggleMenu={toggleMenu}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            handleLogout={handleLogout}
          />
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
});
