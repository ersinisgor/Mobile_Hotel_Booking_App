import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Text } from "../../config/StyledText";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, PADDING, PADDING_SM } from "../../utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { user } from "../../utils/userData";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate("Introduction");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.topSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../../assets/profiles/profile16.jpg")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="camera" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>

        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>

        <View style={styles.buttonsContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color="black"
              />
              <Text style={styles.buttonText}>Notifications</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.rightContent}>ON</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, { marginBottom: 0 }]}>
            <View style={styles.leftContainer}>
              <MaterialIcons name="location-on" size={24} color="black" />
              <Text style={styles.buttonText}>Location</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.rightContent, { fontSize: 14 }]}>
                {user.location}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={24}
                color="black"
              />
              <Text style={styles.buttonText}>Booked</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Booked")}>
              <MaterialIcons name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={[styles.rowContainer, { marginBottom: 0 }]}>
            <View style={styles.leftContainer}>
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={24}
                color="black"
              />
              <Text style={styles.buttonText}>Favourites</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
              <MaterialIcons name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={[styles.rowContainer, { marginBottom: 0 }]}>
            <View style={styles.leftContainer}>
              <MaterialIcons name="logout" size={24} color="black" />
              <Text style={styles.buttonText}>Log Out</Text>
            </View>
            <TouchableOpacity onPress={handleLogout}>
              <MaterialIcons name="chevron-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  topSection: {
    alignItems: "center",
    paddingVertical: 30,
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  editImageButton: {
    position: "absolute",
    right: 8,
    bottom: 8,
    backgroundColor: COLORS.secondary,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },

  content: {
    flex: 1,
    backgroundColor: "#fff",
    padding: PADDING,
    borderTopLeftRadius: PADDING,
    borderTopRightRadius: PADDING,
    // justifyContent: "space-between",
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    textAlign: "center",
  },
  email: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: COLORS.inActiveFont,
    textAlign: "center",
  },
  phone: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: COLORS.inActiveFont,
    textAlign: "center",
    // marginBottom: PADDING,
  },

  buttonsContainer: {
    borderWidth: 1,
    borderColor: COLORS.inActiveLine,
    borderRadius: 6,
    padding: PADDING_SM,
    marginTop: PADDING,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  leftContainer: {
    // flex: 1,
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginLeft: PADDING_SM,
  },
  rightContent: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: COLORS.secondary,
  },
});

export default Profile;
