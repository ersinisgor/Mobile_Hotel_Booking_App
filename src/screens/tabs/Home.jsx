import {
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
            <View style={styles.profileContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../assets/images/profile.jpg")}
                  style={styles.profileImage}
                />
                <View style={styles.badge}></View>
                <View style={styles.badge_2}></View>
              </View>

              <Text>
                👋 Hello <Text style={styles.name}>John</Text>
              </Text>
            </View>
            <View style={styles.searchContainer}>
              <View style={styles.searchBar}>
                <TextInput
                  style={styles.searchText}
                  placeholder="Search for hotels"
                />
                <Pressable onPress={() => {}}>
                  <MaterialIcons name="search" size={24} />
                </Pressable>
              </View>
              <View style={styles.filterIcon}>
                <TouchableOpacity>
                  <MaterialIcons
                    name="filter-list"
                    size={24}
                    color={COLORS.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}></View>

          {/* Slider */}
          <View style={styles.sliderContainer}></View>
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
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    width: 50,
    marginRight: PADDING_SM,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 14,
    height: 14,
    backgroundColor: "green",
    borderRadius: 7,
    zIndex: 1,
  },
  badge_2: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  name: {
    fontFamily: "Poppins-SemiBold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: PADDING_SM,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: COLORS.inActiveBackground,
    borderRadius: 10,
    marginRight: PADDING_SM,
  },
  searchText: {
    flex: 1,
    color: COLORS.inActiveFont,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    paddingHorizontal: 8,
  },
  filterIcon: {
    padding: 8,
    borderWidth: 1,
    borderColor: COLORS.inActiveLine,
  },
  // Main Content
  mainContent: {
    flex: 1,
    marginVertical: "auto",
  },
  // Hamburger Menu
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
