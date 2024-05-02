import React from "react";

import { Stack } from "@chakra-ui/react";
import Field from "./Field";

function Order({ data }) {
  return (
    <Stack>
      {data.answers.map(({ id, text, image }, i) => {
        return (
          <Field key={id} text={text} image={image} active={true} variant="subtle" index={i} />
        );
      })}
    </Stack>
  );
}

export default Order;
