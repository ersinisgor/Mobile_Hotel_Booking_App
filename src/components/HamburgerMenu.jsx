import React from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS, PADDING_SM, WIDTH } from "../utils/constants";

const HamburgerMenu = ({
  toggleMenu,
  isDarkMode,
  setIsDarkMode,
  handleLogout,
}) => {
  const navigation = useNavigation();

  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Background overlay with blur */}
      <BlurView intensity={50} style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={toggleMenu} />
      </BlurView>

      {/* Menu */}
      <View style={styles.menu}>
        <SafeAreaView>
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <MaterialIcons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.menuView}>
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
      </View>
    </View>
  );
};

export default HamburgerMenu;

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: COLORS.primary,
    zIndex: 2,
    padding: PADDING_SM,
    width: WIDTH / 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  menuView: {
    marginTop: WIDTH / 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  menuItemText: {
    marginLeft: PADDING_SM,
    color: "#fff",
    fontSize: 16,
  },
});
