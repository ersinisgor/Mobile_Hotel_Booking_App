import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, PADDING_SM } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ title, hotel, price }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomBar}>
      <View style={styles.priceContainer}>
        {title === "Continue" ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Text style={styles.price}>Total: </Text>
            <Text style={[styles.price, { fontSize: 20 }]}>${price}</Text>
          </View>
        ) : (
          <>
            <Text style={styles.price}>$ {hotel.price}</Text>
            <Text style={styles.priceUnit}>/night</Text>
          </>
        )}
      </View>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => {
          title === "Continue"
            ? navigation.navigate("BookSummary", { hotel })
            : navigation.navigate("BookingForm", { hotel });
        }}
      >
        <Text style={styles.bookButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: PADDING_SM,
    borderTopWidth: 1,
    borderTopColor: COLORS.inActiveLine,
    backgroundColor: "#fff",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  priceUnit: {
    marginLeft: 4,
    color: COLORS.inActiveFont,
  },
  bookButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 48,
    paddingVertical: 12,
    borderRadius: 10,
  },
  bookButtonText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
});
