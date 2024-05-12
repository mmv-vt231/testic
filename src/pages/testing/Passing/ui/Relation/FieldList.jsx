import React from "react";
import letterFromIndex from "@utils/letterFromIndex";

import { Stack, Heading, Box, HStack, Text } from "@chakra-ui/react";
import Field from "../Field";

function FieldList({ title, type, data }) {
  return (
    <Box flex="1 1 500px">
      <Heading fontSize="2xl" color="primary.500" mt={4} mb={4}>
        {title}
      </Heading>
      <Stack spacing={4}>
        {data.map((itemData, i) => (
          <HStack key={itemData.id}>
            <Text fontSize="2xl" color="gray.400" w={6} textAlign="center">
              {type == "answers" ? letterFromIndex(i) : i + 1}
            </Text>
            <Field {...itemData} />
          </HStack>
        ))}
      </Stack>
    </Box>
  );
}

export default FieldList;
