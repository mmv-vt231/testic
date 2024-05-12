import React, { useContext, useEffect } from "react";
import { FormContext } from "@components/shared/form/Form";

import { SimpleGrid, RadioGroup, Radio, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import Field from "../Field";

function SingleOrMultiple({ answers, type }) {
  const { setData, setValidation } = useContext(FormContext);

  useEffect(() => {
    setValidation({
      answer: { answerRequired: true },
    });
  }, []);

  const handleChangeAnswer = ({ target }) => {
    if (type == "single") {
      setData(() => ({
        answer: [target.value],
      }));
    } else {
      setData(data => ({
        answer: data.answer.includes(target.value)
          ? data.answer.filter(el => el != target.value)
          : [...data.answer, target.value],
      }));
    }
  };

  const Group = type == "single" ? RadioGroup : CheckboxGroup;
  const Input = type == "single" ? Radio : Checkbox;

  return (
    <Group>
      <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4} columnGap={8}>
        {answers.map(({ id, ...itemData }, i) => (
          <Input
            key={id}
            sx={{
              "& ~ .chakra-radio__label, .chakra-checkbox__label": { flex: 1, h: "full" },
              "&.chakra-radio__control, .chakra-checkbox__control": {
                w: 6,
                h: 6,
                svg: { w: 4 },
              },
            }}
            value={id}
            size="lg"
            w="full"
            flex="1"
            onChange={handleChangeAnswer}
          >
            <Field {...itemData} cursor="pointer" h="100%" />
          </Input>
        ))}
      </SimpleGrid>
    </Group>
  );
}

export default SingleOrMultiple;
