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

function InputField({ name, label, type, placeholder, Icon }) {
  const { data, setData, errors } = useContext(FormContext);

  const handleChange = e => {
    setData(data => ({ ...data, [name]: e.target.value }));
  };

  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
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
      </InputGroup>
      <FormErrorMessage>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
}

export default InputField;
