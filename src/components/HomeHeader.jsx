import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, PADDING_SM } from "../utils/constants";
import { user } from "../utils/userData";

const HomeHeader = () => {
  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <View style={styles.badge}></View>
          <View style={styles.badge_2}></View>
        </View>

        <Text>
          👋 Hello <Text style={styles.name}>{user.firstName}</Text>
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
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
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
});
