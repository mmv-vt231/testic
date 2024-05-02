import React from "react";

import { Stack } from "@chakra-ui/react";
import Field from "./Field";

function SingleOrMultiple({ data, keys, type }) {
  return (
    <Stack>
      {data.answers.map(({ id, text, image }, i) => {
        const isCorrect = keys.includes(id);

        return (
          <Field
            key={id}
            text={text}
            image={image}
            active={isCorrect}
            variant={type == "single" ? "round" : "subtle"}
            index={i}
          />
        );
      })}
    </Stack>
  );
}

export default SingleOrMultiple;
