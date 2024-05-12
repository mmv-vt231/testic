import React from "react";
import letterFromIndex from "@utils/letterFromIndex";
import isEmpty from "@utils/isEmpty";

import { Stack, Flex, Heading, Box, HStack } from "@chakra-ui/react";
import Field from "./Field";

function Relation({ data, answer: studentAnswer }) {
  const { questions, answers } = data;

  const List = ({ items = [], type }) => (
    <Stack flex={1}>
      {items.map(({ id, text, image }, i) => (
        <Field key={id} text={text} image={image} type={type} variant="subtle" index={i} />
      ))}
      ;
    </Stack>
  );

  return (
    <Stack>
      <Flex gap={4}>
        <List items={questions} />
        <List type="alphabet" items={answers} />
      </Flex>
      <Box mt={4}>
        <Heading fontSize="xl" color="primary.500" mb={2}>
          Відповіді
        </Heading>
        {!isEmpty(studentAnswer) && (
          <HStack spacing={4}>
            {questions.map(({ id }, i) => {
              const { answer, correct } = studentAnswer.find(el => el.question == id);
              const answerIndex = answers.findIndex(el => el.id == answer);
              const answerLetter = letterFromIndex(answerIndex);

              return (
                <Field key={i} text={answerLetter} correct={correct} variant="subtle" index={i} />
              );
            })}
          </HStack>
        )}
      </Box>
    </Stack>
  );
}

export default Relation;
