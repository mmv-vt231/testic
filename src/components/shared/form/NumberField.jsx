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

  const handleChange = e => {
    setData(data => ({ ...data, [name]: e.target.value }));
  };

  return (
    <FormControl isInvalid={!!errors[name]} {...props}>
      <FormLabel>{label}</FormLabel>
      <NumberInput defaultValue={data[name]} min={0} max={100} clampValueOnBlur={false}>
        <NumberInputField onChange={handleChange} />
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
