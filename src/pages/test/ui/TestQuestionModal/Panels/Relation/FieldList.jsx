import React, { useContext, useEffect, useRef } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Stack, Button, Heading } from "@chakra-ui/react";
import InputField from "./InputField";

function FieldList({ data, title, placeholder, type }) {
  const isMounted = useRef(false);
  const { setData } = useContext(FormContext);

  useEffect(() => {
    if (!isMounted.current) {
      if (!data.length) {
        handleCreate(type);
        handleCreate(type);
      }
      isMounted.current = true;
    }
  }, []);

  const handleCreate = () => {
    const id = crypto.randomUUID();

    setData(prevData => {
      const keys =
        type == "questions"
          ? [...prevData.keys, { question: id, answer: null }]
          : [...prevData.keys];

      return {
        ...prevData,
        keys,
        data: {
          ...prevData.data,
          [type]: [...prevData.data[type], { id, text: "", image: null }],
        },
      };
    });
  };

  return (
    <Stack flex={1}>
      <Heading fontSize="xl" color="primary.500" mb={2}>
        {title}
      </Heading>
      {data.map(({ id }, i) => (
        <InputField
          key={id}
          index={i}
          type={type}
          placeholder={placeholder}
          id={id}
          removable={i > 1}
        />
      ))}
      {data.length < 10 && (
        <Button
          variant="ghost"
          size="md"
          color="primary.500"
          m="0 auto"
          onClick={() => handleCreate()}
        >
          + Додати {placeholder.toLowerCase()}
        </Button>
      )}
    </Stack>
  );
}

export default FieldList;
