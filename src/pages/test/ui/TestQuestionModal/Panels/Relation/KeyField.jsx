import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "@components/shared/form/Form";
import letterFromIndex from "@utils/letterFromIndex";

import {
  FormControl,
  Input,
  InputGroup,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function KeyField({ index, question, answer }) {
  const { data, setData } = useContext(FormContext);
  const answers = data.data.answers;

  const { isOpen, onToggle, onClose } = useDisclosure();
  const [state, setState] = useState({
    answerId: null,
    value: "",
  });

  useEffect(() => {
    const answerIndex = answers.findIndex(el => el.id == answer);
    const answerLetter = letterFromIndex(answerIndex);

    if (answerLetter) {
      setState({ answerId: answer, value: answerLetter });
    }
  }, []);

  useEffect(() => {
    if (state.answerId && state.answerId != answer) {
      setState({ answerId: null, value: "" });
    }
  }, [answer]);

  const handleChange = (value, answerId) => {
    setState({
      answerId,
      value,
    });
    setData(data => ({
      ...data,
      keys: data.keys.map(key => {
        const newKeyObj = { ...key };

        if (key.answer == answerId) {
          newKeyObj.answer = null;
        }

        if (key.question == question) {
          newKeyObj.answer = answerId;
        }

        return newKeyObj;
      }),
    }));
    onClose();
  };

  return (
    <FormControl w="auto">
      <InputGroup gap={2} alignItems="center">
        <Text fontSize="lg" color="gray.300" w={6} textAlign="center">
          {index + 1}
        </Text>

        <Popover isLazy isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <Input
              autoComplete="off"
              w={50}
              textAlign="center"
              onClick={onToggle}
              cursor="pointer"
              value={state.value}
              readOnly
            />
          </PopoverTrigger>
          <PopoverContent w={16} maxH={32} overflowY="auto" sx={{ scrollbarWidth: "thin" }}>
            {answers.map(({ id }, i) => {
              const letter = letterFromIndex(i);

              return (
                <Button
                  key={id}
                  variant="ghost"
                  p={2}
                  minH={10}
                  onClick={() => handleChange(letter, id)}
                >
                  {letter}
                </Button>
              );
            })}
          </PopoverContent>
        </Popover>
      </InputGroup>
    </FormControl>
  );
}

export default KeyField;
