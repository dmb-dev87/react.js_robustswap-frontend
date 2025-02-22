import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.33312 0L0.453125 1.88L6.55979 8L0.453125 14.12L2.33312 16L10.3331 8L2.33312 0Z" fill="#FCFCFC"/>
      </svg>
    </Svg>
  );
};

export default Icon;
