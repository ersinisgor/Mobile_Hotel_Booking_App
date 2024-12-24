import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, HEIGHT, PADDING_SM, WIDTH } from "../utils/constants";
import { facilities } from "../utils/helpers";
import MapView, { Marker } from "react-native-maps";
import Footer from "../components/Footer";
import { hotels } from "../utils/dummyDatas";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

const HotelDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [isFavorite, setIsFavorite] = useState(false);

  const [showReviews, setShowReviews] = useState(false);
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const route = useRoute();
  // const { hotel } = route.params;
  const { hotelId } = route.params;
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(favHotel => favHotel.id === hotelId);
  const hotel = hotels.find(hotel => hotel.id === hotelId);

  const displayedReviews = showMoreReviews
    ? hotel.reviews.slice(0, 15)
    : hotel.reviews.slice(0, 5);

  // const handleClick = () => {
  //   navigation.navigate("BookingForm", { hotel });
  // };

  const renderReview = ({ item }) => (
    <View style={styles.reviewItem}>
      <View style={styles.reviewHeader}>
        <Image source={item.avatar} style={styles.reviewerAvatar} />
        <View style={styles.reviewerInfo}>
          <Text style={styles.reviewerName}>{item.user}</Text>
          <Text style={styles.reviewDate}>{item.date}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
    </View>
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(hotel.id));
      console.log(favorites);
    } else {
      dispatch(addFavorite(hotel));
      console.log(favorites);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom", "top"]}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hotel Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={hotel.images[0]}
            style={styles.hotelImage}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <MaterialIcons
              name={isFavorite ? "favorite" : "favorite-border"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* Hotel Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.locationContainer}>
            <MaterialIcons
              name="location-on"
              size={16}
              color={COLORS.grayFont}
            />
            <Text style={styles.location}>{hotel.longAddress}</Text>
          </View>
          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{hotel.description}</Text>
          </View>

          {/* Map Section */}
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: hotel.latitude,
                longitude: hotel.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              // showsUserLocation={true}
            >
              <Marker
                coordinate={{
                  latitude: hotel.latitude,
                  longitude: hotel.longitude,
                }}
                title={hotel.name}
              />
            </MapView>
          </View>

          {/* Facilities Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Facilities</Text>
            <View style={styles.facilitiesContainer}>
              {facilities
                .filter(facility => hotel.facilities.includes(facility.name))
                .map(facility => (
                  <View key={facility.id} style={styles.facilityItem}>
                    <View style={styles.facilityIconContainer}>
                      <MaterialIcons
                        name={facility.icon}
                        size={24}
                        color={COLORS.primary}
                      />
                    </View>
                    <Text style={styles.facilityName}>
                      {facility.displayName}
                    </Text>
                  </View>
                ))}
            </View>
          </View>

          {/* Reviews Section */}
          <View style={styles.section}>
            <View style={styles.reviewsHeader}>
              <View style={styles.raviewsTextContainer}>
                <Text style={styles.reviewsTitle}>Reviews</Text>
                <View style={styles.ratingInfo}>
                  <MaterialIcons
                    name="star"
                    size={17}
                    color="#FFD700"
                    style={{ paddingTop: 2 }}
                  />
                  <Text style={styles.ratingText}>{hotel.rating}</Text>
                  <Text style={styles.reviewCount}>
                    ({hotel.reviews.length} reviews)
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setShowReviews(!showReviews)}>
                <Text style={styles.seeAllButton}>See all</Text>
              </TouchableOpacity>
            </View>

            {showReviews && (
              <View style={styles.reviewsContainer}>
                <FlatList
                  data={displayedReviews}
                  renderItem={renderReview}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
                {hotel.reviews.length > 5 && (
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={[styles.moreButton]}
                      onPress={() => setShowMoreReviews(!showMoreReviews)}
                    >
                      <View style={styles.moreButtonTextConatiner}>
                        <Text style={styles.moreButtonText}>
                          {showMoreReviews ? "Show less" : "More"}
                        </Text>
                        {showMoreReviews ? (
                          <View style={styles.iconContainer}>
                            <Ionicons
                              name="chevron-up"
                              size={22}
                              color={COLORS.secondary}
                            />
                          </View>
                        ) : (
                          <View style={styles.iconContainer}>
                            <Ionicons
                              name="chevron-down"
                              size={22}
                              color={COLORS.secondary}
                            />
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer
        data={hotel}
        title="Book now"
        handleClick={() => {
          navigation.navigate("BookingForm", { hotel });
        }}
        // price={hotel.price}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: PADDING_SM,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    width: WIDTH - PADDING_SM * 2,
    height: WIDTH - PADDING_SM * 2,
    marginTop: PADDING_SM,
    position: "relative",
  },
  hotelImage: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    paddingVertical: PADDING_SM,
  },
  hotelName: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  location: {
    marginLeft: 4,
    color: COLORS.grayFont,
    fontSize: 14,
  },
  section: {
    marginTop: HEIGHT * 0.02,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 12,
  },
  description: {
    color: COLORS.grayFont,
    lineHeight: 20,
  },
  facilitiesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  facilityItem: {
    alignItems: "center",
    width: "20%",
    marginBottom: 16,
  },
  facilityIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: COLORS.primary,
  },
  facilityName: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.grayFont,
    textAlign: "center",
  },
  mapContainer: {
    overflow: "hidden",
    marginTop: PADDING_SM,
    flex: 1,
  },
  map: {
    width: WIDTH - PADDING_SM * 2,
    height: WIDTH - PADDING_SM * 2,
    flex: 1,
  },
  reviewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  raviewsTextContainer: {
    flexDirection: "row",
  },
  reviewsTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    marginRight: PADDING_SM,
  },
  ratingInfo: {
    flexDirection: "row",
    paddingTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    color: COLORS.primary,
  },
  reviewCount: {
    marginLeft: 8,
    color: COLORS.inActiveTab,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    paddingTop: 2,
  },
  seeAllButton: {
    color: COLORS.primary,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    lineHeight: 18,
    paddingTop: 4,
    flex: 1,
  },
  reviewsContainer: {
    marginTop: PADDING_SM,
  },
  reviewItem: {
    marginBottom: PADDING_SM,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: PADDING_SM,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  reviewerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
  },
  reviewerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  reviewerName: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    lineHeight: 20,
  },
  reviewDate: {
    color: COLORS.inActiveFont,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  rating: {
    marginLeft: 4,
    fontWeight: "bold",
    color: "#fff",
  },
  reviewComment: {
    color: COLORS.grayFont,
    lineHeight: 20,
    marginLeft: 62,
  },
  moreButton: {
    marginTop: 8,
    width: 218,
    paddingVertical: 8,
    borderRadius: 12,
    // backgroundColor: "#a8dadc",
    backgroundColor: COLORS.primaryLight,
  },
  moreButtonText: {
    textAlign: "center",
    color: COLORS.secondary,
    marginRight: 8,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  moreButtonTextConatiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  iconContainer: {
    marginBottom: 4,
  },
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

export default HotelDetails;
