import React from "react";
import { useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { FormContext } from "./Form";

function InputField({ name, label, type, placeholder, Icon, RightElement }) {
  const { data, setData, errors } = useContext(FormContext);

  const handleChange = e => {
    setData(data => ({ ...data, [name]: e.target.value }));
  };

  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      <InputGroup gap={2} alignItems="center">
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          value={data[name]}
          onChange={handleChange}
        />
        {Icon && (
          <InputRightElement>
            <Icon fill="gray.400" boxSize={5} />
          </InputRightElement>
        )}
        {RightElement}
      </InputGroup>
      <FormErrorMessage>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
}

export default InputField;
