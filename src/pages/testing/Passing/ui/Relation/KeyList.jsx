import React from "react";

import { Box, Heading, Stack } from "@chakra-ui/react";
import KeyField from "./KeyField";

function KeyList({ data }) {
  const { questions, answers } = data;

  return (
    <Box flex="1 1 100%">
      <Heading fontSize="2xl" color="primary.500">
        Відповідь
      </Heading>
      <Stack direction="row" spacing={4} mt={4} flexWrap="wrap">
        {questions.map(({ id }, i) => (
          <KeyField key={id} question={id} answers={answers} index={i} />
        ))}
      </Stack>
    </Box>
  );
}

export default KeyList;
