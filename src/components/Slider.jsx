import React from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import Slide from "./Slide";
import { COLORS, PADDING_SM } from "../utils/constants";

const Slider = ({ activeSlide, handleSlideChange }) => {
  const slidesData = [
    {
      image: require("../../assets/images/slider1.jpg"),
      textLines: [
        { text: "Last-minute", style: "sliderTextSemibold" },
        { text: "weekend", style: "sliderTextbold" },
        { text: "deals", style: "sliderText" },
      ],
    },
    {
      image: require("../../assets/images/slider8.jpg"),
      textLines: [
        { text: "Get", style: "sliderTextSemibold" },
        { text: "10% OFF", style: "sliderTextbold" },
        { text: "on your first booking", style: "sliderText" },
      ],
    },
    {
      image: require("../../assets/images/slider5.jpg"),
      textLines: [
        { text: "Planning", style: "sliderTextSemibold" },
        { text: "a new Escape?", style: "sliderTextbold" },
        { text: "Let's explore", style: "sliderText" },
      ],
    },
  ];

  return (
    <>
      <PagerView
        style={styles.pagerView}
        initialPage={1}
        pageMargin={PADDING_SM}
        onPageSelected={handleSlideChange}
      >
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            image={slide.image}
            textLines={slide.textLines}
            styles={styles}
          />
        ))}
      </PagerView>

      <View style={styles.dotsContainer}>
        {slidesData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeSlide === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
  },
  inactiveDot: {
    backgroundColor: COLORS.inActiveLine,
  },
});
