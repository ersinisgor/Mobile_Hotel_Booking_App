// HotelDetails.js
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const SCREEN_WIDTH = Dimensions.get("window").width;

// Dummy data for reviews
const dummyReviews = [
  {
    id: "1",
    user: "Atiba Valerie",
    date: "May 4, 2023",
    rating: 5,
    comment: "Quite impressed, I would definitely come back",
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    id: "2",
    user: "Angelo Phoebe",
    date: "April 17, 2023",
    rating: 4,
    comment:
      "The rooms are comfy and the environment is so calm if you need time away",
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    id: "3",
    user: "Davidson Jr",
    date: "Feb 17, 2023",
    rating: 5,
    comment:
      "I dont often recommend or give suggestions about anything to people but try this.",
    avatar: "https://example.com/avatar3.jpg",
  },
  // Add more reviews if needed
];

const HotelDetails = () => {
  const navigation = useNavigation();
  const [showReviews, setShowReviews] = useState(false);
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const route = useRoute();
  const { hotel } = route.params;

  const facilities = [
    { id: "1", name: "Wifi", icon: "wifi" },
    { id: "2", name: "Restaurant", icon: "restaurant" },
    { id: "3", name: "Bar", icon: "wine-bar" },
    { id: "4", name: "Pool", icon: "pool" },
    { id: "5", name: "Gym", icon: "fitness-center" },
  ];

  const displayedReviews = showMoreReviews
    ? hotel.reviews.slice(0, 15)
    : hotel.reviews.slice(0, 5);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
          <TouchableOpacity style={styles.favoriteButton}>
            <MaterialIcons name="favorite-border" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Hotel Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={16} color="#666" />
            <Text style={styles.location}>{hotel.longAddress}</Text>
          </View>

          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{hotel.description}</Text>
          </View>

          {/* Facilities Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Facilities</Text>
            <View style={styles.facilitiesContainer}>
              {facilities.map(facility => (
                <View key={facility.id} style={styles.facilityItem}>
                  <MaterialIcons name={facility.icon} size={24} color="#666" />
                  <Text style={styles.facilityName}>{facility.name}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Reviews Section */}
          <View style={styles.section}>
            <View style={styles.reviewsHeader}>
              <Text style={styles.sectionTitle}>Reviews</Text>
              <View style={styles.ratingInfo}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>{hotel.rating}</Text>
                <Text style={styles.reviewCount}>
                  ({hotel.reviews.length} reviews)
                </Text>
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
                  <TouchableOpacity
                    style={[
                      styles.moreButton,
                      { opacity: hotel.reviews.length <= 5 ? 0.5 : 1 },
                    ]}
                    onPress={() => setShowMoreReviews(!showMoreReviews)}
                    disabled={hotel.reviews.length <= 5}
                  >
                    <Text style={styles.moreButtonText}>
                      {showMoreReviews ? "Show less" : "More"}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {hotel.price}</Text>
          <Text style={styles.priceUnit}>/night</Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: 300,
    position: "relative",
  },
  hotelImage: {
    width: "100%",
    height: "100%",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    padding: 16,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  location: {
    marginLeft: 4,
    color: "#666",
    fontSize: 14,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    color: "#666",
    lineHeight: 20,
  },
  facilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  facilityItem: {
    alignItems: "center",
    width: "20%",
    marginBottom: 16,
  },
  facilityName: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  reviewsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  ratingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: "bold",
  },
  reviewCount: {
    marginLeft: 4,
    color: "#666",
  },
  seeAllButton: {
    color: "#2A9D8F",
    fontWeight: "bold",
  },
  reviewsContainer: {
    marginTop: 8,
  },
  reviewItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  reviewerName: {
    fontWeight: "bold",
  },
  reviewDate: {
    color: "#666",
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    fontWeight: "bold",
  },
  reviewComment: {
    color: "#666",
    lineHeight: 20,
  },
  moreButton: {
    alignItems: "center",
    padding: 12,
    marginTop: 8,
  },
  moreButtonText: {
    color: "#2A9D8F",
    fontWeight: "bold",
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceUnit: {
    marginLeft: 4,
    color: "#666",
  },
  bookButton: {
    backgroundColor: "#2A9D8F",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HotelDetails;
