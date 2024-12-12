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
  inActiveLine: "#E3E3E4",
  inActiveBackground: "rgba(228,228,228,0.3)",
  activeProfile: "#0FA958",
};

export { COLORS, WIDTH, HEIGHT, PADDING, PADDING_SM };
