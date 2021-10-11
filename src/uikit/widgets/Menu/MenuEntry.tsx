import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  isPushed?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text};
  font-family: Poppins;
  font-style: normal;
  font-size: 18px;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({isPushed, secondary }) => (isPushed ? secondary ? "0 48px" : "0 40px" : "0 26px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  color: ${({ theme }) => theme.colors.textSubtle};
  box-shadow: ${({ isActive, theme }) => (isActive ? `none` : "none")};
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ isActive, secondary, isPushed}) => (isActive? !secondary ? isPushed? `linear-gradient(90.04deg, rgba(12, 7, 32, 0.8) 0.04%, rgba(41, 26, 131, 0.8) 99.97%)` 
      : "linear-gradient(90.04deg, rgba(12, 7, 32, 0.8) 0.04%, rgba(41, 26, 131, 0.8) 99.97%)" : "" : "")};
    border-radius: ${({isPushed}) => isPushed? '8px':'33px'};
  }
  a:hover{
    background: linear-gradient(90.04deg, rgba(12, 7, 32, 0.8) 0.04%, rgba(41, 26, 131, 0.8) 99.97%) ;
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${rainbowAnimation} 5s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;

    a > div {
      color: ${({ theme }) => theme.colors.textSubtle};
    }
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  isPushed: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
