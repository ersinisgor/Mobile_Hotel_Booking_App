import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Introduction from "./src/screens/Introduction";

export default function App() {
  return <Introduction />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
