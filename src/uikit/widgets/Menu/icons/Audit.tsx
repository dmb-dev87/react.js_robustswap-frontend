import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M14 1.16699L3.5 5.83366V12.8337C3.5 19.3087 7.98 25.3637 14 26.8337C20.02 25.3637 24.5 19.3087 24.5 12.8337V5.83366L14 1.16699ZM14 13.9887H22.1667C21.5483 18.7953 18.34 23.077 14 24.4187V14.0003H5.83333V7.35033L14 3.72199V13.9887Z" fill="#FCFCFC"/>
    </Svg>
  );
};

export default Icon;


