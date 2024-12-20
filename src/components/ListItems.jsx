import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { COLORS, PADDING_SM } from "../utils/constants";

const ListItems = ({ title, listDatas = [], renderItem }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {listDatas.length > 0 ? (
          <FlatList
            data={listDatas}
            keyExtractor={(item, index) => item?.id || index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 4 }}
          />
        ) : (
          <Text style={styles.noItems}>No {title.toLowerCase()} found.</Text>
        )}
      </View>
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: PADDING_SM,
  },
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
  noItems: {
    textAlign: "center",
    color: COLORS.grayFont,
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Poppins-Regular",
  },
});
