import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { PADDING_SM } from "../utils/constants";

const Slide = ({ image, textLines }) => {
  return (
    <View>
      <Image source={image} style={styles.sliderImage} />
      <View style={styles.sliderTextContainer}>
        {textLines.map((line, index) => (
          <Text key={index} style={styles[line.style]}>
            {line.text}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  sliderImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  sliderTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 8,
    paddingHorizontal: PADDING_SM,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
  },
  sliderTextSemibold: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  sliderTextbold: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Poppins-Bold",
  },
  sliderText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
});
