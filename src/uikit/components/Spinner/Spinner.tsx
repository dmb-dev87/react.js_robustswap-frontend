import React from "react";
import styled, { keyframes } from "styled-components";
import LogoIcon from "../Svg/Icons/Logo";
import { SpinnerProps } from "./types";

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const Container = styled.div`
  position: relative;
`;

const PulseLogoIcon = styled(LogoIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${pulse} 2s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <PulseLogoIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
