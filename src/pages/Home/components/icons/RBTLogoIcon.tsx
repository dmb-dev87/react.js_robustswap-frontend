import React from "react";
import Svg from "../../../../uikit/components/Svg/Svg";
import { SvgProps } from "../../../../uikit/components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FCFCFC"/>
      <g clipPath="url(#clip0)">
      <path fillRule="evenodd" clipRule="evenodd" d="M23.7114 28.0444C27.8192 25.4865 30.5535 21.0007 30.5535 15.8848C30.5535 7.92124 23.9382 1.46973 15.773 1.46973C11.577 1.46973 7.78422 3.17081 5.1003 5.90514H16.9071C21.9221 5.90514 26.0047 9.88693 26.0047 14.776C26.0047 18.8208 23.2074 22.2481 19.3894 23.3066L23.7114 28.0444ZM9.7878 19.287H16.9323C19.3769 19.287 21.3552 17.2583 21.3804 14.776C21.3804 12.281 19.3895 10.2523 16.9449 10.2523H2.54245C1.82421 11.9912 1.43359 13.8939 1.43359 15.8974C1.43359 24.0122 7.8725 30.5897 15.8235 30.5897C17.0079 30.5897 18.1672 30.4385 19.2635 30.1613L9.7878 19.287Z" fill="#5F47EE"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="29.12" height="29.12" fill="white" transform="translate(1.44043 1.44043)"/>
      </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
