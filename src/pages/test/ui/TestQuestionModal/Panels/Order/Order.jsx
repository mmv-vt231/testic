import React, { useContext, useEffect, useRef } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Stack, Button, Box } from "@chakra-ui/react";
import InputField from "./InputField";

function Order() {
  const isMounted = useRef(false);
  const { data, setData } = useContext(FormContext);
  const answers = data.data.answers;

  useEffect(() => {
    if (!isMounted.current) {
      if (!answers.length) {
        handleCreate();
        handleCreate();
      }
      isMounted.current = true;
    }
  }, []);

  const handleCreate = () => {
    const id = crypto.randomUUID();

    setData(data => ({
      ...data,
      keys: [...data.keys, id],
      data: {
        answers: [...data.data.answers, { id, text: "", image: null }],
      },
    }));
  };

  return (
    <Box>
      <Stack>
        {answers.map(({ id }, i) => (
          <InputField key={id} index={i} answerId={id} removable={i > 1} />
        ))}
        {answers.length < 10 && (
          <Button variant="ghost" size="md" color="primary.500" m="0 auto" onClick={handleCreate}>
            + Додати відповідь
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default Order;
