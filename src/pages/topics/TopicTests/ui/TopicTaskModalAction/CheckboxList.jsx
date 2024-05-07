import React, { useContext } from "react";
import { FormContext } from "@components/shared/form/Form";

import { Checkbox, HStack, Stack, Text } from "@chakra-ui/react";

function CheckboxList() {
  const { data, setData, errors } = useContext(FormContext);

  const handleChangeCheckbox = ({ target }) => {
    setData(prevData => ({
      ...prevData,
      [target.value]: !prevData[target.value],
    }));
  };

  return (
    <Stack>
      <HStack>
        <Checkbox
          value="oneChance"
          size="lg"
          isChecked={data.oneChance}
          onChange={handleChangeCheckbox}
        />
        <Text>Одна спроба</Text>
      </HStack>
      <HStack>
        <Checkbox
          value="showAnswers"
          size="lg"
          isChecked={data.showAnswers}
          onChange={handleChangeCheckbox}
        />
        <Text>Показ відповідей</Text>
      </HStack>
      <HStack>
        <Checkbox
          value="shuffle"
          size="lg"
          isChecked={data.shuffle}
          onChange={handleChangeCheckbox}
        />
        <Text>Перемішати відповіді</Text>
      </HStack>
    </Stack>
  );
}

export default CheckboxList;
