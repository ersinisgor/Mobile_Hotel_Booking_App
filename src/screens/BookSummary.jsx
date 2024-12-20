import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, HEIGHT, PADDING_SM } from "../utils/constants";
import HotelCard from "../components/HotelCard";
import CheckRow from "../components/CheckRow";
import { formatDate } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addPreviousBooking } from "../redux/bookingSlice";

const BookSummary = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { hotelData, bookingData } = route.params;
  const [showConfirmPaymentModal, setShowConfirmPaymentModal] = useState(false);

  const confirmPayment = () => {
    // Add to previous bookings
    dispatch(addPreviousBooking(bookingData));
    setShowConfirmPaymentModal(true);
  };

  const closeModal = () => {
    setShowConfirmPaymentModal(false);
    navigation.navigate("Tabs");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView style={styles.content}>
        {/* Personal Information */}
        <View style={styles.section}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text
              style={styles.infoValue}
            >{`${bookingData.firstName} ${bookingData.surname}`}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{bookingData.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{bookingData.phone}</Text>
          </View>
        </View>

        {/* Hotel Card */}
        <View style={styles.hotelCard}>
          <HotelCard hotel={hotelData} touchable={false} />

          {/* Booking Details */}
          <View style={styles.bookingDetails}>
            <CheckRow
              textCheckIn={formatDate(bookingData.checkIn)}
              textCheckOut={formatDate(bookingData.checkOut)}
              summary={true}
            />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Room Type</Text>
              <Text style={styles.infoValue}>{bookingData.roomType}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Guest</Text>
              <Text style={styles.infoValue}>{bookingData.numberOfGuests}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Number of rooms</Text>
              <Text style={styles.infoValue}>{bookingData.numberOfRooms}</Text>
            </View>
            <View style={[styles.infoRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>$ {bookingData.totalPrice}</Text>
            </View>
          </View>
        </View>

        {/* Confirm Payment Modal */}
        <Modal
          visible={showConfirmPaymentModal}
          transparent
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={require("../../assets/successful.jpg")}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>Payment successfull !</Text>
              <Text style={styles.modalText}>
                Hi John, Your booking was successful.
              </Text>
              <TouchableOpacity style={styles.modalClose} onPress={closeModal}>
                <Text style={styles.modalCloseText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>

      {/* Confirm Payment Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmPayment}>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: PADDING_SM,
    paddingVertical: HEIGHT / 15,
  },
  modalImage: {
    alignSelf: "center",
    marginBottom: HEIGHT / 15,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    marginBottom: HEIGHT * 0.01,
  },
  modalClose: {
    padding: PADDING_SM,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    marginTop: HEIGHT / 15,
    borderRadius: 13,
    width: "70%",
    alignSelf: "center",
  },
  modalCloseText: { color: "#fff", fontFamily: "Poppins-SemiBold" },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.inActiveLine,
    borderRadius: 10,
    padding: 8,
    backgroundColor: COLORS.inActiveBackground,
  },
  modalText: {
    fontSize: 14,
    color: COLORS.inActiveFont,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});

export default BookSummary;
