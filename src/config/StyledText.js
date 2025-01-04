import React from "react";
import { Text as RNText, TextInput as RNTextInput } from "react-native";

export const Text = ({ style, ...props }) => (
  <RNText style={[{ fontFamily: "Poppins-Medium" }, style]} {...props} />
);

export const TextInput = ({ style, ...props }) => (
  <RNTextInput style={[{ fontFamily: "Poppins-Medium" }, style]} {...props} />
);
