import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const PADDING = 26;
const PADDING_SM = 15;

const COLORS = {
  primary: "#238C98",
  secondary: "#1976D2",
  inActiveFont: "#B1ACAC",
  inActiveTab: "#B8B8B9",
  tabsBackground: "rgba(227, 227, 228, 0.19)",
};

export { COLORS, WIDTH, HEIGHT, PADDING, PADDING_SM };
