import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HotelCard from "../../components/HotelCard";

import { COLORS, PADDING_SM } from "../../utils/constants";

const Favourite = () => {
  const hotel = {
    id: "1",
    name: "Estabeez Hotel",
    location: "Ikoyi, Lagos",
    price: 140000,
    rating: 4.8,
    images: [require("../../../assets/images/image1.jpg")],
    isFavorite: true,
  };

  const handlePressFavorite = id => {
    console.log("Toggle favorite for hotel:", id);
  };

  const handlePressCard = hotel => {
    console.log("Navigate to hotel details:", hotel);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourites</Text>
        {/* <View style={{ width: 24 }} /> Empty view for spacing */}
      </View>
      <View style={{ padding: 16 }}>
        <HotelCard
          hotel={hotel}
          onPressFavorite={handlePressFavorite}
          onPressCard={handlePressCard}
          touchable={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inActiveLine,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  content: {
    flex: 1,
    padding: PADDING_SM,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: PADDING_SM,
    marginBottom: PADDING_SM,
    borderWidth: 1,
    borderColor: COLORS.inActiveLine,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: COLORS.grayFont,
    fontFamily: "Poppins-Regular",
  },
  infoValue: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
});
