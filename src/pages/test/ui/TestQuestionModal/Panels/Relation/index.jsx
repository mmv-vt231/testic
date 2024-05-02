import React, { useContext } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Stack, Flex, Box, Heading } from "@chakra-ui/react";
import KeyField from "./KeyField";
import FieldList from "./FieldList";

function Relation() {
  const { data, errors } = useContext(FormContext);

  return (
    <Box>
      <Flex gap={5} flexWrap="wrap">
        <FieldList
          data={data.data.questions}
          title="Питання"
          placeholder="Питання"
          type="questions"
        />
        <FieldList
          data={data.data.answers}
          title="Відповіді"
          placeholder="Відповідь"
          type="answers"
        />
        <Box flex="1 1 100%">
          <Heading fontSize="xl" color="primary.500">
            Ключ
          </Heading>
          {errors?.keys && (
            <Box color="red.500" fontSize="sm">
              {errors.keys}
            </Box>
          )}
          <Stack direction="row" spacing={4} mt={4} flexWrap="wrap">
            {data.keys.map(({ question, answer }, i) => (
              <KeyField key={question} question={question} answer={answer} index={i} />
            ))}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Relation;
