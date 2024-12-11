import React from "react";
import { StyleSheet, TextInput, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, HEIGHT } from "../utils/constants";

const CustomInput = ({
  placeholder,
  iconName,
  keyboardType = "default",
  secureTextEntry = false,
  isPassword = false,
  onToggleSecureEntry,
}) => {
  return (
    <View style={styles.input}>
      <Ionicons name={iconName} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.inActiveFont}
        style={styles.inputText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        textContentType={isPassword ? "password" : "emailAddress"}
        secureTextEntry={secureTextEntry}
      />
      {isPassword && (
        <Pressable onPress={onToggleSecureEntry}>
          <Ionicons
            name={secureTextEntry ? "eye-off" : "eye"}
            style={styles.icon}
          />
        </Pressable>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
    marginBottom: HEIGHT / 24,
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 20,
    color: "rgba(0,0,0,0.5)",
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
