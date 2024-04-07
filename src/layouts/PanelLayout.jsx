import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

import Navbar from "@components/layout/Navbar";

function PanelLayout() {
  return (
    <Flex h="100vh">
      <Navbar />
      <Box bg="gray.50" flex="1 1 auto" p={8}>
        <Outlet />
      </Box>
    </Flex>
  );
}

export default PanelLayout;
