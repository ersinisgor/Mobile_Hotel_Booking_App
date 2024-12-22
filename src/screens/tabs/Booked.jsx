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
  deletePreviousBooking,
} from "../../redux/bookingSlice";
import CustomButton from "../../components/CustomButton";
import { COLORS, PADDING_SM } from "../../utils/constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Booked = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Fetch previous bookings from Redux
  const previousBookings = useSelector(state => state.booking.previousBookings);

  useEffect(() => {
    // Load previousBookings from AsyncStorage
    dispatch(initializePreviousBookings());
  }, [dispatch]);

  const clearAll = () => {
    dispatch(clearAllPreviousBookings());
  };

  const deleteBooking = id => {
    dispatch(deletePreviousBooking(id));
  };

  // Render each booking
  const renderBooking = ({ item }) => (
    <View style={styles.bookingRow}>
      <View style={styles.hotelCardContainer}>
        <HotelCard
          hotel={item.hotelData}
          touchable={true}
          onPressCard={() => {
            navigation.navigate("BookSummary", {
              bookingId: item.id,
              bookingHistory: true,
            });
          }}
        />
      </View>
      <TouchableOpacity onPress={() => deleteBooking(item.id)}>
        <MaterialIcons name="delete-outline" size={30} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={{ paddingHorizontal: PADDING_SM, flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Booking History</Text>
        </View>

        {previousBookings.length > 0 ? (
          <FlatList
            data={previousBookings}
            keyExtractor={item => item.id}
            renderItem={renderBooking}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.noBookings}>No bookings found.</Text>
        )}

        <View style={styles.footer}>
          <CustomButton title="Clear All" onPress={clearAll} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Booked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: PADDING_SM,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inActiveLine,
    marginVertical: PADDING_SM,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: PADDING_SM,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: PADDING_SM,
    // flexGrow: 1,
    // marginBottom: PADDING_SM,
  },

  listContainer: {
    // flex: 1,
    flexGrow: 1,
    paddingHorizontal: 2,
    // justifyContent: "space-between",
  },
  noBookings: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
    // flex: 1,
    flexGrow: 1,
  },
  bookingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  hotelCardContainer: {
    flex: 1,
    marginRight: 17,
  },

  footer: {
    // padding: PADDING_SM,
    // paddingTop: PADDING_SM,
    marginVertical: PADDING_SM,
    // borderTopWidth: 1,
    // borderTopColor: COLORS.inActiveLine,
  },
});
