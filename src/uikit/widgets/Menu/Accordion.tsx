import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  background-color: #151745;

`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntry isPushed={isPushed} onClick={handleClick} className={className}>
        {icon}
        {isPushed && 
          <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        }
        {isPushed ? isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />: <></>}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
