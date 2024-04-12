import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

import Navbar from "@components/layout/Navbar";

function PanelLayout() {
  return (
    <Flex h="100vh">
      <Navbar />
      <Box pos="relative" flex="1 1 auto" bg="gray.50" p={8}>
        <Outlet />
      </Box>
    </Flex>
  );
}

export default PanelLayout;
