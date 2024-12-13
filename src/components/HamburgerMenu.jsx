import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, PADDING, WIDTH } from "../utils/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const HamburgerMenu = ({
  toggleMenu,
  isDarkMode,
  setIsDarkMode,
  handleLogout,
}) => {
  const navigation = useNavigation();

  return (
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
          <MaterialCommunityIcons name="account-edit" size={24} color="#fff" />
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
  );
};

export default HamburgerMenu;

const styles = StyleSheet.create({
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
