import React from "react";
import { useContext, useEffect, useRef } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Stack, Button, RadioGroup, CheckboxGroup, Box } from "@chakra-ui/react";
import InputField from "./InputField";

function SingleOrMultiple({ type }) {
  const isMounted = useRef(false);
  const { data, errors, setData } = useContext(FormContext);
  const answers = data.data.answers;
  const defaultChecked = type == "multiple" ? data.keys : data.keys[0];

  const error = errors?.keys;

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
      data: {
        answers: [...data.data.answers, { id, text: "", image: null }],
      },
    }));
  };

  const Group = type == "multiple" ? CheckboxGroup : RadioGroup;

  return (
    <Group defaultValue={defaultChecked}>
      {error && (
        <Box color="red.500" fontSize="sm" mb={2}>
          {error}
        </Box>
      )}
      <Stack>
        {answers.map(({ id }, i) => (
          <InputField key={id} type={type} index={i} answerId={id} removable={i > 1} />
        ))}
        {answers.length < 10 && (
          <Button variant="ghost" size="md" color="primary.500" m="0 auto" onClick={handleCreate}>
            + Додати відповідь
          </Button>
        )}
      </Stack>
    </Group>
  );
}

export default SingleOrMultiple;
