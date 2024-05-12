import React from "react";
import { API_HOST } from "@config/constants";
import letterFromIndex from "@utils/letterFromIndex";

import { Badge, HStack, Text, Image } from "@chakra-ui/react";

function Field({ text, image, type, correct, variant, index }) {
  const colorScheme = (correct == null && "gray") || (correct ? "green" : "red");

  return (
    <HStack>
      <Badge colorScheme={colorScheme} variant={variant} size="md">
        {type == "alphabet" ? letterFromIndex(index) : index + 1}
      </Badge>
      {image ? (
        <Image src={`${API_HOST}/${image}`} maxH={75} />
      ) : (
        <Text flex={1} color={`${colorScheme}.400`} fontWeight="bold">
          {text}
        </Text>
      )}
    </HStack>
  );
}

export default Field;
