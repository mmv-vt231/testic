import React from "react";
import Question from "./Question";
import { Card, CardBody, Heading, Stack } from "@chakra-ui/react";

function Answers({ questions, answers }) {
  return (
    <Card>
      <CardBody>
        <Heading textAlign="center">Відповіді</Heading>
        <Stack>
          {questions.map(({ id, ...question }) => {
            const answer = answers.find(ans => ans.questionId == id);

            return <Question key={id} question={question} studentAnswer={answer} />;
          })}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Answers;
