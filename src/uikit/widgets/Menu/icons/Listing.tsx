import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 15.1665H5.83333V12.8332H3.5V15.1665ZM3.5 19.8332H5.83333V17.4998H3.5V19.8332ZM3.5 10.4998H5.83333V8.1665H3.5V10.4998ZM8.16667 15.1665H24.5V12.8332H8.16667V15.1665ZM8.16667 19.8332H24.5V17.4998H8.16667V19.8332ZM8.16667 8.1665V10.4998H24.5V8.1665H8.16667ZM3.5 15.1665H5.83333V12.8332H3.5V15.1665ZM3.5 19.8332H5.83333V17.4998H3.5V19.8332ZM3.5 10.4998H5.83333V8.1665H3.5V10.4998ZM8.16667 15.1665H24.5V12.8332H8.16667V15.1665ZM8.16667 19.8332H24.5V17.4998H8.16667V19.8332ZM8.16667 8.1665V10.4998H24.5V8.1665H8.16667Z" fill="#FCFCFC"/>
      </svg>
    </Svg>
  );
};

export default Icon;
