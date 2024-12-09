import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import { COLORS, WIDTH, PADDING } from "../utils/constants";

const Introduction = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/room_6.jpg")}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" translucent />

      {/* <View style={styles.overlay} /> */}
      <View style={styles.container}>
        <Text style={styles.main_text}>Find your ideal Hotel to stay</Text>
      </View>
    </ImageBackground>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main_text: {
    position: "absolute",
    left: PADDING,
    top: 168,
    width: 292,
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
});
