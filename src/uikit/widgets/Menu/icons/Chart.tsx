import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6663 7L21.338 9.67167L15.6447 15.365L10.978 10.6983L2.33301 19.355L3.97801 21L10.978 14L15.6447 18.6667L22.9947 11.3283L25.6663 14V7H18.6663Z" fill="#FCFCFC"/>
      </svg>
    </Svg>
  );
};

export default Icon;
