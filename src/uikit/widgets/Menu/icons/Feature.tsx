import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 27 27" {...props}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7997 7.00033L16.333 4.66699H5.83301V24.5003H8.16634V16.3337H14.6997L15.1663 18.667H23.333V7.00033H16.7997Z" fill="#FCFCFC"/>
      </svg>
    </Svg>
  );
};

export default Icon;
