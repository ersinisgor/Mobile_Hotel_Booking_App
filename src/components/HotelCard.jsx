import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { COLORS, PADDING_SM, WIDTH } from "../utils/constants";

const HotelCard = ({ hotel, onPressFavorite, onPressCard, touchable }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  const CardContent = (
    <>
      <Image source={hotel.images[0]} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {hotel.name}
            </Text>
            <Text style={styles.location} numberOfLines={1}>
              {hotel.location}
            </Text>
          </View>

          <TouchableOpacity
            // onPress={() => onPressFavorite?.(hotel.id)}
            onPress={() => {
              toggleFavorite(), onPressFavorite?.(hotel.id);
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={22}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>
            $ {hotel.price.toLocaleString()}
            <Text style={styles.perNight}>/night</Text>
          </Text>
          <View style={styles.rating}>
            <MaterialIcons
              name="star"
              size={18}
              color="#FFD700"
              style={{ marginTop: -4 }}
            />
            <Text style={styles.ratingText}>{hotel.rating}</Text>
          </View>
        </View>
      </View>
    </>
  );

  if (!touchable) {
    return <View style={styles.container}>{CardContent}</View>;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressCard?.(hotel)}
    >
      {CardContent}
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    overflow: "hidden",
    padding: PADDING_SM,
    marginBottom: PADDING_SM,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    // width: 100
    width: WIDTH * 0.3,
    // height: 77,
    // height: WIDTH * 0.25,
    height: "100%",
    borderRadius: 20,
    // alignSelf: "center",
    marginRight: PADDING_SM,
  },
  content: {
    flex: 1,
    // padding: 8,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // backgroundColor: "red",
  },
  titleContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 2,
  },
  location: {
    fontSize: 12,
    color: COLORS.grayFont,
    fontFamily: "Poppins-Regular",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
  },
  perNight: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: COLORS.grayFont,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
  },
});
