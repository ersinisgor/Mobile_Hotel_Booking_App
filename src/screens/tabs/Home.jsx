import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import {
  COLORS,
  HEIGHT,
  PADDING,
  PADDING_SM,
  WIDTH,
} from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Slider from "../../components/Slider";
import HomeHeader from "../../components/HomeHeader";
import HamburgerMenu from "../../components/HamburgerMenu";
import {
  popularHotels,
  recomendedHotels,
  nearbyHotels,
} from "../../utils/DummyDatas";

const Home = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Near Me");
  const navigation = useNavigation();

  const handleCategoryChange = category => {
    setActiveCategory(category);
  };

  const handleSlideChange = event => {
    setActiveSlide(event.nativeEvent.position);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out");
      navigation.navigate("Introduction");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const renderHotelCard = ({ item }) => (
    <TouchableOpacity style={styles.hotelCard}>
      <Image source={item.image} style={styles.hotelImage} resizeMode="cover" />
      <View style={styles.hotelInfo}>
        <View style={styles.hotelHeader}>
          <Text style={styles.hotelName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.hotelRating}>⭐ {item.rating}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.hotelLocation}>
            <MaterialIcons
              name="location-on"
              size={14}
              color={COLORS.inActiveFont}
            />
            {item.location}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            // marginTop: 8,
          }}
        >
          <Text style={styles.hotelPrice}>
            $ {item.price}/<Text style={styles.hotelNight}>night</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const getHotels = () => {
    switch (activeCategory) {
      case "Near Me":
        return nearbyHotels;
      case "Recommended":
        return recomendedHotels;
      case "Popular":
        return popularHotels;
      default:
        return [];
    }
  };

  const categories = ["Near Me", "Recommended", "Popular"];

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.viewContainer}>
        <View style={{ marginTop: PADDING_SM }}>
          <TouchableOpacity onPress={toggleMenu}>
            <MaterialIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <HomeHeader />
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Categories */}
            <View style={styles.categories}>
              {categories.map(category => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.category,
                    activeCategory === category && styles.categoryActive,
                  ]}
                  onPress={() => handleCategoryChange(category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      activeCategory === category && styles.categoryTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {getHotels().map(hotel => (
                <View key={hotel.id} style={styles.hotelWrapper}>
                  {renderHotelCard({ item: hotel })}
                </View>
              ))}
            </ScrollView>
            <View style={styles.seeAllContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ListHotels")}
              >
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Slider */}
          <View style={styles.sliderContainer}>
            <Slider
              styles={styles}
              activeSlide={activeSlide}
              handleSlideChange={handleSlideChange}
              PADDING_SM={PADDING_SM}
            />
          </View>
        </View>

        {/* Hamburger Menu */}
        {isMenuVisible && (
          <HamburgerMenu
            toggleMenu={toggleMenu}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            handleLogout={handleLogout}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewContainer: {
    flex: 1,
    paddingHorizontal: PADDING_SM,
  },
  content: {
    flex: 1,
  },
  // Header
  headerContainer: {
    borderColor: COLORS.inActiveLine,
    borderWidth: 1,
    padding: PADDING_SM,
    borderRadius: 20,
    marginVertical: PADDING,
  },
  // Main Content
  mainContent: {
    // flex: 1,
    marginVertical: "auto",
  },
  // popularHotels: {
  //   fontFamily: "Poppins-Medium",
  //   fontSize: 16,
  //   marginBottom: PADDING_SM,
  // },
  categories: {
    flexDirection: "row",
    paddingHorizontal: PADDING_SM,
    marginBottom: PADDING_SM,
  },
  category: {
    marginRight: 16,
    paddingVertical: 4,
  },
  categoryActive: {
    marginRight: PADDING_SM,
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  categoryText: {
    color: COLORS.inActiveFont,
    fontFamily: "Poppins-SemiBold",
  },
  categoryTextActive: {
    color: "#000",
    fontFamily: "Poppins-SemiBold",
  },
  hotelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hotelWrapper: {
    marginRight: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  hotelCard: {
    width: WIDTH / 1.7,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hotelImage: {
    width: "100%",
    height: HEIGHT / 6,
    borderRadius: 13,
    // borderTopLeftRadius: 12,
    // borderTopRightRadius: 12,
  },
  hotelInfo: {
    padding: 8,
  },
  hotelName: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    // fontWeight: "bold",
    marginBottom: 4,
    flexShrink: 1,
  },
  hotelRating: {
    fontSize: 14,
    // color: "#666",
    fontFamily: "Poppins-SemiBold",
    marginLeft: 8,
  },
  hotelLocation: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    // color: "#666",
    color: COLORS.inActiveFont,
    marginBottom: 4,
  },
  hotelPrice: {
    fontSize: 12,
    fontFamily: "Poppins-Bold",
    // color: "#007AFF",
    color: COLORS.secondary,
    // marginBottom: 4,
  },
  hotelNight: {
    fontSize: 12,
    fontFamily: "Poppins-ExtraBold",
    color: COLORS.inActiveFont,
  },

  seeAllContainer: {
    alignItems: "flex-end",
    marginVertical: 8,
  },
  seeAll: {
    fontFamily: "Poppins-Medium",
    color: COLORS.primary,
    fontSize: 15,
    marginRight: PADDING_SM,
  },

  // Slider
  sliderContainer: {
    height: WIDTH / 3,
    marginBottom: PADDING_SM,
  },
});
