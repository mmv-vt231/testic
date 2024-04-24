import { useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { FormContext } from "./Form";

function NumberField({ name, label, ...props }) {
  const { data, setData, errors } = useContext(FormContext);

  const handleChange = value => {
    setData(data => ({ ...data, [name]: value }));
  };

  return (
    <FormControl isInvalid={!!errors[name]} {...props}>
      <FormLabel>{label}</FormLabel>
      <NumberInput
        onChange={handleChange}
        defaultValue={data[name]}
        min={0}
        max={100}
        clampValueOnBlur={false}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
}

export default NumberField;
