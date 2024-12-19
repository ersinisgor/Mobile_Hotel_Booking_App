import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, PADDING_SM } from "../utils/constants";
import HotelCard from "../components/HotelCard";
import CheckRow from "../components/CheckRow";

const BookSummary = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { hotel, formData } = route.params;

  const formatDate = date => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  };

  const calculateTotal = () => {
    const nights = Math.ceil(
      (formData.checkOut - formData.checkIn) / (1000 * 60 * 60 * 24)
    );
    return hotel.price * formData.numberOfRooms * nights;
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.content}>
        {/* Personal Information */}
        <View style={styles.section}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text
              style={styles.infoValue}
            >{`${formData.firstName} ${formData.surname}`}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{formData.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{formData.phone}</Text>
          </View>
        </View>

        {/* Hotel Card */}
        <View style={styles.hotelCard}>
          <HotelCard hotel={hotel} touchable={false} />

          {/* Booking Details */}
          <View style={styles.bookingDetails}>
            <CheckRow
              textCheckIn={formatDate(formData.checkIn)}
              textCheckOut={formatDate(formData.checkOut)}
              summary={true}
            />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Room Type</Text>
              <Text style={styles.infoValue}>{formData.roomType}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Guest</Text>
              <Text style={styles.infoValue}>{formData.numberOfGuests}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Number of rooms</Text>
              <Text style={styles.infoValue}>{formData.numberOfRooms}</Text>
            </View>
            <View style={[styles.infoRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                $ {calculateTotal().toLocaleString()}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Confirm Payment Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm payment</Text>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: PADDING_SM,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inActiveLine,
  },
  headerTitle: {
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
  hotelCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: PADDING_SM,
    borderWidth: 1,
    borderColor: COLORS.inActiveLine,
  },
  hotelInfo: {
    marginBottom: PADDING_SM,
  },
  hotelImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  hotelDetails: {
    gap: 4,
  },
  hotelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hotelName: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  location: {
    fontSize: 14,
    color: COLORS.grayFont,
    fontFamily: "Poppins-Regular",
  },
  priceRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
  bookingDetails: {
    gap: 12,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: COLORS.inActiveLine,
    paddingTop: 16,
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  totalValue: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    color: COLORS.primary,
  },
  footer: {
    padding: PADDING_SM,
    borderTopWidth: 1,
    borderTopColor: COLORS.inActiveLine,
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
});

export default BookSummary;
