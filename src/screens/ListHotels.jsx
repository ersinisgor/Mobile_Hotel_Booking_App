import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import ListItems from "../components/ListItems";
import HotelCard from "../components/HotelCard";
import { PADDING, PADDING_SM } from "../utils/constants";

const ListHotels = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { activeCategory, displayHotels } = route.params;

  useEffect(() => {
    // Set the header title dynamically when the component is mounted
    navigation.setOptions({
      title: activeCategory, // Set the title to activeCategory
    });
  }, [activeCategory, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayHotels}
        renderItem={({ item }) => (
          <HotelCard key={item.id} hotel={item} touchable={true} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 4 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListHotels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING_SM,
    backgroundColor: "#fff",
  },
});
