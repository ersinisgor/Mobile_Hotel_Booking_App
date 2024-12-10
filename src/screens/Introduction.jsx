import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import { WIDTH, HEIGHT, PADDING } from "../utils/constants";
import Button from "../components/Button";

const Introduction = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/intro.jpg")}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" translucent hidden={true} />
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.main_text}>Find your ideal Hotel to stay</Text>
        <Text style={styles.main_description}>
          Discover the best hotels at great prices when you search with Hotel
          Travel
        </Text>
        <Text style={styles.main_info}>
          Search through 10,234 hotels in Hotel Travel
        </Text>
        <Button title="Get Started" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    flex: 1,
    paddingHorizontal: PADDING,
    paddingVertical: PADDING * 5,
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  main_text: {
    fontFamily: "DMSerifDisplay-Regular",
    width: WIDTH - PADDING * 2,
    color: "#fff",
    fontSize: 42,
  },
  main_description: {
    fontFamily: "Poppins-SemiBold",
    position: "absolute",
    left: PADDING,
    top: HEIGHT / 3,
    width: WIDTH - PADDING * 2,
    color: "#fff",
    fontSize: 22,
  },
  main_info: {
    fontFamily: "Poppins-Medium",
    position: "absolute",
    left: PADDING,
    bottom: HEIGHT / 4,
    width: WIDTH - PADDING * 2,
    color: "#fff",
    fontSize: 16,
  },
});
