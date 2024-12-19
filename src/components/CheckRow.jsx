import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, PADDING } from "../utils/constants";
import { MaterialIcons } from "@expo/vector-icons";

const CheckRow = ({
  onPressCheckIn,
  onPressCheckOut,
  textCheckIn,
  textCheckOut,
  touchable,
}) => {
  const checkInContent = (
    <>
      <Text>{textCheckIn}</Text>
      <MaterialIcons name="calendar-today" size={20} color={COLORS.grayFont} />
    </>
  );
  const checkOutContent = (
    <>
      <Text>{textCheckOut}</Text>
      <MaterialIcons name="calendar-today" size={20} color={COLORS.grayFont} />
    </>
  );
  return (
    <View style={styles.rowContainer}>
      <View style={styles.halfInput}>
        <Text style={styles.label}>Check in</Text>
        {touchable ? (
          <TouchableOpacity style={styles.dateButton} onPress={onPressCheckIn}>
            {checkInContent}
          </TouchableOpacity>
        ) : (
          <View style={styles.dateButton}>{checkInContent}</View>
        )}
      </View>
      {!touchable && (
        <MaterialIcons
          name="arrow-forward"
          color={COLORS.grayFont}
          size={20}
          style={{
            alignSelf: "flex-end",
            marginBottom: 15,
          }}
        />
      )}
      <View style={styles.halfInput}>
        <Text style={styles.label}>Check out</Text>
        {touchable ? (
          <TouchableOpacity style={styles.dateButton} onPress={onPressCheckOut}>
            {checkOutContent}
          </TouchableOpacity>
        ) : (
          <View style={styles.dateButton}>{checkOutContent}</View>
        )}
      </View>
    </View>
  );
};

export default CheckRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: PADDING,
  },
  halfInput: {
    width: "45%",
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 4,
  },
  dateButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.inActiveLine,
    borderRadius: 10,
    padding: 12,
    backgroundColor: COLORS.inActiveBackground,
  },
});
