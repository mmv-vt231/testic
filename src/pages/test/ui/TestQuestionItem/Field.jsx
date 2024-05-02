import React from "react";
import { API_HOST } from "@config/constants";
import letterFromIndex from "@utils/letterFromIndex";

import { Badge, HStack, Text, Image } from "@chakra-ui/react";

function Field({ text, image, type, active, variant, index }) {
  return (
    <HStack>
      <Badge colorScheme={active ? "green" : "gray"} variant={variant} size="md">
        {type == "alphabet" ? letterFromIndex(index) : index + 1}
      </Badge>
      {image ? (
        <Image src={`${API_HOST}/${image}`} maxW={100} maxH={100} />
      ) : (
        <Text flex={1} color={active ? "green.400" : "gray.400"} fontWeight="bold">
          {text}
        </Text>
      )}
    </HStack>
  );
}

export default Field;
