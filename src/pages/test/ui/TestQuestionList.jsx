import React from "react";
import TestQuestionItem from "./TestQuestionItem";
import { Stack } from "@chakra-ui/react";

function TestQuestionList({ data }) {
  return (
    <Stack spacing={2} maxW="768px" m="0 auto">
      {data.map((el, i) => (
        <TestQuestionItem key={i} data={el} />
      ))}
    </Stack>
  );
}

export default TestQuestionList;
