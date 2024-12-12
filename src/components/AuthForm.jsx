import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, HEIGHT, PADDING, WIDTH } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthForm = ({ type }) => {
  const [secureText, setSecureText] = useState(true);
  const [secureTextConfirm, setSecureTextConfirm] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setemail] = useState("test@mail.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      navigation.navigate("Login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user.email);
      navigation.navigate("Tabs");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const updateSecureText = () => {
    setSecureText(prev => !prev);
  };

  const updateSecureTextConfirm = () => {
    setSecureTextConfirm(prev => !prev);
  };

  const updateRememberMe = () => {
    setRememberMe(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <View>
        <View>
          <CustomInput
            placeholder="Email"
            iconName="mail"
            keyboardType="email-address"
            secureTextEntry={false}
            isPassword={false}
            value={email}
            onChangeText={setemail}
          />
          <CustomInput
            placeholder="Password"
            iconName="lock-closed"
            keyboardType="default"
            secureTextEntry={secureText}
            isPassword={true}
            onToggleSecureEntry={updateSecureText}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {type === "Login" ? (
          <View style={styles.forget}>
            <View style={styles.checkboxContainer}>
              <Pressable onPress={updateRememberMe}>
                <MaterialCommunityIcons
                  name={
                    rememberMe ? "checkbox-blank-outline" : "checkbox-marked"
                  }
                  style={styles.icon}
                />
              </Pressable>
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <Pressable onPress={() => {}}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </Pressable>
          </View>
        ) : (
          <CustomInput
            placeholder="Confirm Password"
            iconName="lock-closed"
            keyboardType="default"
            secureTextEntry={secureTextConfirm}
            isPassword={true}
            onToggleSecureEntry={updateSecureTextConfirm}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        )}
      </View>
      <View style={styles.divider}>
        <CustomButton
          title={type}
          onPress={type === "Login" ? handleLogin : handleSignUp}
        />
        <Text style={styles.orText}>or</Text>
        <View style={styles.authTypeContainer}>
          <View style={styles.iconTextContainer}>
            <Pressable style={styles.iconFrame} onPress={() => {}}>
              <Image
                source={require("../../assets/images/google_icon.png")}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
            <Text style={styles.iconText}>Google</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Pressable style={styles.iconFrame} onPress={() => {}}>
              <Ionicons
                name="logo-apple"
                style={{ fontSize: 28, color: "000" }}
              />
            </Pressable>
            <Text style={styles.iconText}>Apple</Text>
          </View>
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.forgetText}>
            {type === "Login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </Text>
          <Pressable
            onPress={() =>
              navigation.navigate(type === "Login" ? "Signup" : "Login")
            }
          >
            <Text style={styles.link}>
              {type === "Login" ? "Sign Up" : "Login"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: PADDING,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    marginVertical: HEIGHT / 24,
    marginBottom: HEIGHT / 12,
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 20,
    color: "rgba(0,0,0,0.5)",
  },
  inputText: {
    flex: 1,
    color: COLORS.inActiveFont,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  forget: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: HEIGHT / 24,
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    fontFamily: "Poppins-Medium",
    color: "#837A7A",
    fontSize: 13,
  },
  forgetText: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
  },
  divider: {
    paddingHorizontal: PADDING,
  },
  orText: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    textAlign: "center",
    marginVertical: HEIGHT / 24,
  },
  authTypeContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconTextContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  iconFrame: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: 58,
    height: 48,
    borderRadius: 10,
    marginHorizontal: WIDTH / 16,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontFamily: "Poppins-Medium",
    fontSize: 11,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: HEIGHT / 24,
  },
  link: {
    fontFamily: "Poppins-SemiBold",
    color: COLORS.primary,
    fontSize: 14,
    marginLeft: 10,
  },
});
