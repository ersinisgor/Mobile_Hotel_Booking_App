import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HotelCard from "../../components/HotelCard";

import { COLORS, PADDING_SM } from "../../utils/constants";
import ListItems from "../../components/ListItems";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Favourite = () => {
  // const hotels = [
  //   {
  //     id: "1",
  //     name: "Estabeez Hotel",
  //     location: "Ikoyi, Lagos",
  //     price: 140000,
  //     rating: 4.8,
  //     images: [require("../../../assets/images/image1.jpg")],
  //     isFavorite: true,
  //   },
  //   {
  //     id: "2",
  //     name: "Estabeez Hotel",
  //     location: "Ikoyi, Lagos",
  //     price: 140000,
  //     rating: 4.8,
  //     images: [require("../../../assets/images/image1.jpg")],
  //     isFavorite: true,
  //   },
  //   {
  //     id: "3",
  //     name: "Estabeez Hotel",
  //     location: "Ikoyi, Lagos",
  //     price: 140000,
  //     rating: 4.8,
  //     images: [require("../../../assets/images/image1.jpg")],
  //     isFavorite: true,
  //   },
  //   {
  //     id: "4",
  //     name: "Estabeez Hotel",
  //     location: "Ikoyi, Lagos",
  //     price: 140000,
  //     rating: 4.8,
  //     images: [require("../../../assets/images/image1.jpg")],
  //     isFavorite: true,
  //   },
  //   {
  //     id: "5",
  //     name: "Estabeez Hotel",
  //     location: "Ikoyi, Lagos",
  //     price: 140000,
  //     rating: 4.8,
  //     images: [require("../../../assets/images/image1.jpg")],
  //     isFavorite: true,
  //   },
  //   {
  //     id: "6",
  //     name: "Estabeez Hotel",
  //     location: "Ikoyi, Lagos",
  //     price: 140000,
  //     rating: 4.8,
  //     images: [require("../../../assets/images/image1.jpg")],
  //     isFavorite: true,
  //   },
  // ];
  const favorites = useSelector(state => state.favorites);
  // console.log(favorites);
  const navigation = useNavigation();

  const handlePressFavorite = id => {
    console.log("Toggle favorite for hotel:", id);
  };

  const navigateToHotelDetails = hotel => {
    navigation.navigate("HotelDetails", { hotelId: hotel.id });
    // console.log("Navigate to hotel details:", hotel);
  };

  const renderHotelCard = ({ item: hotel }) => (
    <HotelCard
      key={hotel.id}
      hotel={hotel}
      onPressCard={navigateToHotelDetails}
      touchable={true}
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={{ paddingHorizontal: PADDING_SM, flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Favourites</Text>
        </View>

        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            keyExtractor={item => item.id}
            renderItem={renderHotelCard}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noItems}>No favourites found.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inActiveLine,
    marginVertical: PADDING_SM,
  },
  title: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: "Poppins-SemiBold",
    marginBottom: PADDING_SM,
    textAlign: "center",
  },

  listContainer: {
    flexGrow: 1,
    paddingHorizontal: 2,
  },
  noItems: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
    // flex: 1,
    flexGrow: 1,
  },
});
