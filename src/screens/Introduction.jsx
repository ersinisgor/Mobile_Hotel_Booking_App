import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const Introduction = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text>Introduction</Text>
      </SafeAreaView>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({});
