import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#5F47EE",
  primaryBright: "#e66000",
  primaryDark: "#d95b00",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#FF720D",
  textDetail: "#7381FC",
  borderColor: "#E9EAEB",
  deviderColor: "#151745",
  card: "#FFFFFF",
  menuBackground:"linear-gradient(180deg, #0C0720 0%, #291A83 100%)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "linear-gradient(180deg, #0C0720 0%, #291A83 100%)",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  inputBorder: "#cccccc",
  primaryDark: "#A0B9FB",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FF720D",
  menuBackground:"linear-gradient(180deg, #0C0720 0%, #291A83 100%)",
  textDetail: "#7381FC",
  borderColor: "#0C0720",
  deviderColor: "#151745",
  card: "#1E215C",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
