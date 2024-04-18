import { Flex, Heading, HStack } from "@chakra-ui/react";

function Header({ title, Title, children }) {
  return (
    <Flex justify="space-between" mb={5} gap={5} flexWrap="wrap">
      {title && <Heading>{title}</Heading>}
      {Title && <Title />}
      <HStack spacing={2} flexWrap="wrap">
        {children}
      </HStack>
    </Flex>
  );
}

export default Header;
