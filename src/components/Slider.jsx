import React from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import Slide from "./Slide";
import { COLORS, PADDING_SM } from "../utils/constants";
import { slidesData } from "../utils/dummyDatas";

const Slider = ({ activeSlide, handleSlideChange }) => {
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
    width: 8,
    height: 8,
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
