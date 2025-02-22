export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputBorder: string;
  background: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textDetail: string,
  textSubtle: string;
  borderColor: string;
  deviderColor: string;
  valueDividerColor: string,
  card: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
  menuBackground: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
