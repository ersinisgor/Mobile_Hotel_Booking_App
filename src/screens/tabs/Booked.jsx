import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import HotelCard from "../../components/HotelCard";
import {
  clearAllPreviousBookings,
  initializePreviousBookings,
} from "../../redux/bookingSlice";
import CustomButton from "../../components/CustomButton";
import { PADDING_SM } from "../../utils/constants";
import ListItems from "../../components/ListItems";

const Booked = () => {
  const dispatch = useDispatch();

  // Fetch previous bookings from Redux
  const previousBookings = useSelector(state => state.booking.previousBookings);

  useEffect(() => {
    // Load previousBookings from AsyncStorage
    dispatch(initializePreviousBookings());
  }, []);

  const clearAll = () => {
    dispatch(clearAllPreviousBookings());
  };

  // Render each booking
  const renderBooking = ({ item }) => (
    <HotelCard hotel={item.hotelData} touchable={false} />
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ListItems
        title="Bookings History"
        listDatas={previousBookings}
        renderItem={renderBooking}
      />
      {/* <Text style={styles.title}>Booking History</Text>

      {previousBookings.length > 0 ? (
        <FlatList
          data={previousBookings}
          keyExtractor={item => item.id}
          renderItem={renderBooking}
        />
      ) : (
        <Text style={styles.noBookings}>No bookings found.</Text>
      )} */}

      <CustomButton title="Clear All" onPress={clearAll} />
    </SafeAreaView>
  );
};

export default Booked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: PADDING_SM,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  noBookings: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
    flex: 1,
  },
});
