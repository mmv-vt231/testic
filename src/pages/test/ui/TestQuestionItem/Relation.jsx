import React from "react";
import letterFromIndex from "@utils/letterFromIndex";

import { Stack, Flex, Heading, Box, HStack } from "@chakra-ui/react";
import Field from "./Field";

function Relation({ data, keys }) {
  const List = ({ items = [], type }) => (
    <Stack flex={1}>
      {items.map((item, i) => (
        <Field key={item.id} {...item} type={type} variant="subtle" index={i} />
      ))}
      ;
    </Stack>
  );

  return (
    <Stack>
      <Flex gap={4}>
        <List items={data.questions} />
        <List type="alphabet" items={data.answers} />
      </Flex>
      <Box mt={4}>
        <Heading fontSize="xl" color="primary.500" mb={2}>
          Відповіді
        </Heading>
        <HStack spacing={4}>
          {keys.map((item, i) => {
            const answerIndex = data.answers.findIndex(el => el.id == item.answer);
            const answerLetter = letterFromIndex(answerIndex);

            return (
              <Field
                key={item.question}
                text={answerLetter}
                active={true}
                variant="subtle"
                index={i}
              />
            );
          })}
        </HStack>
      </Box>
    </Stack>
  );
}

export default Relation;
