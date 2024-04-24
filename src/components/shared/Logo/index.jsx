import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

import logo from "@assets/images/logo/logo.svg";

function Logo({ w }) {
  return (
    <Link to="/">
      <Image w={w || 200} src={logo} alt="Testic" />
    </Link>
  );
}

export default Logo;
