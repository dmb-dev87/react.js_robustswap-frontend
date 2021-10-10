import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import Logo from "./Logo";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "0" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
  &:hover {
    & #collapse {
      display:flex;
    }
  }
`;
const PanelCollapse = styled.div`
  display: none;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #3924B5;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: -16px;
  transform: scale(1, 1);
`


const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, pushNav, isDark , links} = props;
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <div 
        style={{
          padding: '24px 0px 60px 32px',
          
      }}>
        <Logo
          isPushed={isPushed}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
      </div>
      <PanelBody {...props} />
      <PanelFooter {...props} />
      { isPushed && 
        <PanelCollapse id='collapse' onClick={() => pushNav(false)}>
          <div  style={{
            position: 'absolute',
            top: '8px',
            left: '10px'}}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.78 2.58039L6.6 1.40039L0 8.00039L6.6 14.6004L7.78 13.4204L2.36 8.00039L7.78 2.58039Z" fill="#A0B9FB"/>
              </svg>
          </div>
        </PanelCollapse>
      }
    </StyledPanel>
  );
};

export default Panel;
