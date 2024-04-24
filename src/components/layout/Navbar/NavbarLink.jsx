import React from "react";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import useMatch from "@hooks/useMatch";

function NavbarLink({ href, paths, ...props }) {
  const match = useMatch(paths || href);

  return <NavbarButton as={Link} to={href} isActive={match} {...props} />;
}

export default NavbarLink;
