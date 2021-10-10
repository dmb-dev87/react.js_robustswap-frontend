import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path clip="evenodd" d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12.5189 9.00553C11.4441 9.45256 9.29616 10.3778 6.07494 11.7812C5.55186 11.9892 5.27785 12.1927 5.25291 12.3917C5.21075 12.728 5.63186 12.8604 6.2053 13.0407C6.28331 13.0652 6.36413 13.0906 6.44699 13.1176C7.01117 13.301 7.77009 13.5155 8.16462 13.524C8.5225 13.5318 8.92193 13.3842 9.36292 13.0814C12.3726 11.0498 13.9262 10.0229 14.0238 10.0008C14.0926 9.98516 14.1879 9.96553 14.2525 10.023C14.3171 10.0804 14.3108 10.1891 14.3039 10.2183C14.2622 10.3962 12.6092 11.9329 11.7538 12.7282C11.4871 12.9762 11.2979 13.152 11.2593 13.1922C11.1726 13.2822 11.0844 13.3673 10.9995 13.4491C10.4754 13.9543 10.0823 14.3332 11.0213 14.952C11.4725 15.2494 11.8336 15.4952 12.1938 15.7405C12.5872 16.0084 12.9795 16.2757 13.4872 16.6084C13.6165 16.6932 13.7401 16.7813 13.8604 16.8671C14.3182 17.1934 14.7295 17.4867 15.2376 17.4399C15.5329 17.4127 15.8379 17.1351 15.9928 16.307C16.3588 14.3501 17.0784 10.1101 17.2447 8.36285C17.2592 8.20977 17.2409 8.01386 17.2262 7.92786C17.2115 7.84186 17.1807 7.71932 17.0689 7.62862C16.9365 7.52119 16.7322 7.49854 16.6407 7.50007C16.2251 7.50747 15.5875 7.72919 12.5189 9.00553Z" fill="#F0EFEF"/>
      </svg>
    </Svg>
  );
};

export default Icon;
