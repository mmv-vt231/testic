import { Flex, Box } from "@chakra-ui/react";

function PanelLayout() {
  return (
    <Flex h="100vh">
      <Flex flex="0 0 200px">Панель</Flex>
      <Box></Box>
    </Flex>
  );
}

export default PanelLayout;
