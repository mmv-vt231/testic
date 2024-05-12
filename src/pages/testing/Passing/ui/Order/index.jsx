import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Stack, HStack, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowDown } from "@icons";
import Field from "../Field";

function Order({ answers = [] }) {
  const [answersData, setAnswersData] = useState([]);
  const { setData, setValidation } = useContext(FormContext);

  useEffect(() => {
    setValidation({});
    setData(() => ({
      answer: answers.map(({ id }) => id),
    }));
    setAnswersData(answers);
  }, []);

  const swap = (arr, index, direction) => {
    const newData = JSON.parse(JSON.stringify(arr));
    const swapIndex = direction == "up" ? index - 1 : index + 1;

    const temp = newData[swapIndex];
    newData[swapIndex] = newData[index];
    newData[index] = temp;

    return newData;
  };

  const handleRaise = (id, i) => {
    if (i != 0) {
      const index = answersData.findIndex(el => el.id == id);

      setData(data => ({
        answer: swap(data.answer, index, "up"),
      }));

      setAnswersData(data => swap(data, index, "up"));
    }
  };

  const handleDrop = (id, i) => {
    if (i != answersData.length - 1) {
      const index = answersData.findIndex(el => el.id == id);

      setData(data => ({
        answer: swap(data.answer, index, "down"),
      }));

      setAnswersData(data => swap(data, index, "down"));
    }
  };

  return (
    <Stack gap={4}>
      {answersData.map(({ id, ...itemData }, i) => (
        <HStack key={id}>
          <Text fontSize="2xl" color="gray.400" w={6} textAlign="center">
            {i + 1}
          </Text>
          <Field {...itemData} />
          <ButtonGroup orientation="vertical">
            <Button
              p="10px 20px"
              isDisabled={i == 0}
              transition="none"
              onClick={() => handleRaise(id, i)}
            >
              <ArrowDown transform="rotate(180deg)" boxSize={8} />
            </Button>
            <Button
              p="10px 20px"
              isDisabled={i == answersData.length - 1}
              transition="none"
              onClick={() => handleDrop(id, i)}
            >
              <ArrowDown boxSize={8} />
            </Button>
          </ButtonGroup>
        </HStack>
      ))}
    </Stack>
  );
}

export default Order;
