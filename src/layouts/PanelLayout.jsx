import React from "react";
import useMatch from "@hooks/useMatch";

import { Navigate, Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "@components/layout/Navbar";

function PanelLayout() {
  const match = useMatch("/panel", true);

  if (match) {
    return <Navigate to="topics" replace={true} />;
  }

  return (
    <Flex h="100vh">
      <Navbar />
      <Box pos="relative" flex="1 1 auto" bg="gray.50" overflow="auto" p={8}>
        <Outlet />
      </Box>
    </Flex>
  );
}

export default PanelLayout;
