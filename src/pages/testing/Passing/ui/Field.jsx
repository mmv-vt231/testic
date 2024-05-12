import React from "react";
import { API_HOST } from "@config/constants";

import { Image, HStack, Text } from "@chakra-ui/react";

function Field({ text, image, ...props }) {
  return (
    <HStack
      flex={1}
      minH={100}
      bg="white"
      spacing={5}
      p={4}
      fontWeight="bold"
      border="1px solid"
      borderColor="gray.300"
      rounded="xl"
      {...props}
    >
      {image ? (
        <Image maxH={150} src={`${API_HOST}/${image}`} />
      ) : (
        <Text fontSize="xl">{text}</Text>
      )}
    </HStack>
  );
}

export default Field;
