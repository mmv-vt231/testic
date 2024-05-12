import React from "react";
import isEmpty from "@utils/isEmpty";

import { Stack } from "@chakra-ui/react";
import Field from "./Field";

function Order({ data, answer }) {
  const { answers } = data;

  return (
    <Stack>
      {answers.map(({ id, text, image }, i) => {
        let isCorrect = null;

        if (!isEmpty(answer)) {
          isCorrect = answer[i].correct;
        }

        return (
          <Field
            key={id}
            text={text}
            image={image}
            correct={isCorrect}
            variant="subtle"
            index={i}
          />
        );
      })}
    </Stack>
  );
}

export default Order;
