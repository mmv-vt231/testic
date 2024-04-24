import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

import logo from "@assets/images/logo/logo.svg";

function NavbarHeader() {
  return (
    <Link to="/">
      <Image src={logo} alt="Testic" p={4} />
    </Link>
  );
}

export default NavbarHeader;
