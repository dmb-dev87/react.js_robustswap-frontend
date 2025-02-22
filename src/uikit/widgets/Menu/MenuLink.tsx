import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  const Tag: any = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag {...props} {...otherProps} />;
};

export default MenuLink;
