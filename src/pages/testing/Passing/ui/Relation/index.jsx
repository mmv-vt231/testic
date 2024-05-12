import React, { useContext, useEffect } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Flex } from "@chakra-ui/react";
import FieldList from "./FieldList";
import KeyList from "./KeyList";

function Relation({ data }) {
  const { setValidation, setData } = useContext(FormContext);
  const { questions, answers } = data;

  useEffect(() => {
    setValidation({
      answer: { relativeKeysRequired: true },
    });
    setData(() => ({
      answer: questions.map(({ id }) => ({
        question: id,
        answer: null,
      })),
    }));
  }, []);

  return (
    <Flex gap={8} flexWrap="wrap">
      <FieldList title="Питання" type="questions" data={questions} />
      <FieldList title="Відповіді" type="answers" data={answers} />
      <KeyList data={data} />
    </Flex>
  );
}

export default Relation;
