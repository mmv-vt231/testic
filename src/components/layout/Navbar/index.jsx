import React from "react";
import { Flex, Divider } from "@chakra-ui/react";

import NavbarHeader from "./NavbarHeader";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <Flex as="nav" direction="column" flex="0 0 250px" py={8} px={5}>
      <NavbarHeader />
      <Divider borderBottomColor="primary.500" my={5} mx="auto" w={50} />
      <NavbarLinks />
    </Flex>
  );
}

export default Navbar;
