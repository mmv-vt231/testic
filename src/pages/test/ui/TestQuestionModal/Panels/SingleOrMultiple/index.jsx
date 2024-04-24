import React from "react";
import { useContext, useEffect, useRef } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Stack, Button, RadioGroup, CheckboxGroup } from "@chakra-ui/react";
import InputField from "./InputField";

function SingleOrMultiple({ type }) {
  const isMounted = useRef(false);
  const { data, setData } = useContext(FormContext);

  useEffect(() => {
    if (!isMounted.current) {
      handleCreate();
      handleCreate();
      isMounted.current = true;
    }
  }, []);

  const handleCreate = () => {
    const id = crypto.randomUUID();

    setData(data => ({
      ...data,
      answers: [...data.answers, { id, text: "", image: null }],
    }));
  };

  const Group = type == "multiple" ? CheckboxGroup : RadioGroup;

  return (
    <Group>
      <Stack>
        {data.answers.map(({ id }, i) => (
          <InputField key={id} type={type} index={i} answerId={id} removable={i > 1} />
        ))}
        {data.answers.length < 10 && (
          <Button variant="ghost" size="md" color="primary.500" m="0 auto" onClick={handleCreate}>
            + Додати відповідь
          </Button>
        )}
      </Stack>
    </Group>
  );
}

export default SingleOrMultiple;
