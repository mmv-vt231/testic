import React from "react";
import isEmpty from "@utils/isEmpty";

import { Stack } from "@chakra-ui/react";
import Field from "./Field";

function SingleOrMultiple({ data, answer, type }) {
  const { answers } = data;

  return (
    <Stack>
      {answers.map(({ id, text, image }, i) => {
        let isCorrect = null;

        if (!isEmpty(answer)) {
          isCorrect = answer.find(el => el.answerId == id)?.correct;
        }

        return (
          <Field
            key={id}
            text={text}
            image={image}
            correct={isCorrect}
            variant={type == "single" ? "round" : "subtle"}
            index={i}
          />
        );
      })}
    </Stack>
  );
}

export default SingleOrMultiple;
