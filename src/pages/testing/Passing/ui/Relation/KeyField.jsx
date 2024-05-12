import React, { useContext } from "react";
import { FormContext } from "@components/shared/form/Form";
import letterFromIndex from "@utils/letterFromIndex";

import {
  Input,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";

function KeyField({ index, question, answers }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { data, setData } = useContext(FormContext);

  const answer = data?.answer?.[index] || [];
  const answerIndex = answers.findIndex(ans => ans.id == answer.answer);
  const answerLetter = answerIndex > -1 ? letterFromIndex(answerIndex) : "";

  const handleChange = answerId => {
    setData(data => ({
      answer: data.answer.map(el => {
        const newData = { ...el };

        if (el.answer == answerId) {
          newData.answer = null;
        }

        if (el.question == question) {
          newData.answer = answerId;
        }

        return newData;
      }),
    }));
    onClose();
  };

  return (
    <HStack w="auto" alignItems="center">
      <Text fontSize="2xl" color="gray.400" w={6} textAlign="center">
        {index + 1}
      </Text>

      <Popover isLazy isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Input
            autoComplete="off"
            w={100}
            h={50}
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            onClick={onToggle}
            cursor="pointer"
            value={answerLetter}
            readOnly
          />
        </PopoverTrigger>
        <PopoverContent
          w={100}
          maxH={32}
          overflowY="auto"
          sx={{ scrollbarWidth: "thin" }}
          shadow="lg"
        >
          {answers.map(({ id }, i) => {
            const letter = letterFromIndex(i);

            return (
              <Button
                key={id}
                variant="ghost"
                minH={10}
                fontSize="xl"
                p={2}
                onClick={() => handleChange(id)}
              >
                {letter}
              </Button>
            );
          })}
        </PopoverContent>
      </Popover>
    </HStack>
  );
}

export default KeyField;
