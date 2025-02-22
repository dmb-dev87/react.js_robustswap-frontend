import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const RBSIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 25" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M103.488 51.7998C103.488 80.2761 80.2766 103.488 51.8003 103.488C23.3387 103.488 0.112305 80.2761 0.112305 51.7998C0.112305 23.3382 23.324 0.111816 51.8003 0.111816C80.2766 0.111816 103.488 23.3235 103.488 51.7998ZM16.968 24.9457C16.968 20.8166 17.6906 17.0561 19.1653 13.6201C-7.82159 36.6548 2.29482 73.6696 34.915 85.2459C39.5603 86.8828 44.1024 87.6939 48.5559 87.6939C55.0888 87.6939 63.4356 84.9215 63.4356 77.1351C63.4356 70.4405 52.5053 64.1982 46.4747 60.7541L46.4747 60.754C46.0624 60.5186 45.673 60.2962 45.3116 60.0877L45.116 59.9773C30.6621 51.8189 16.968 44.0894 16.968 24.9457ZM86.2196 79.0228C86.2196 83.1519 85.497 86.9271 84.0223 90.3484C111.009 67.3137 100.893 30.3136 68.2726 18.7225C63.6273 17.0856 59.0852 16.2746 54.6169 16.2746C48.0988 16.2746 39.752 19.047 39.752 26.8334C39.752 33.528 50.6824 39.7704 56.713 43.2145L56.7135 43.2147C57.1255 43.4501 57.5147 43.6724 57.876 43.8808L58.0074 43.9548C72.4849 52.1121 86.2196 59.8507 86.2196 79.0228Z" fill="#5F47EE"/>
    </Svg>
  );
};

export default RBSIcon;
