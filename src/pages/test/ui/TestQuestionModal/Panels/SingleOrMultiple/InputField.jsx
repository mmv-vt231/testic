import React from "react";
import { useContext } from "react";
import { FormContext } from "@components/shared/form/Form";

import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Radio,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import ImageField from "@components/shared/form/ImageField";
import { Delete } from "@icons";

function InputField({ index, type, answerId, removable }) {
  const { data, setData, errors, setErrors } = useContext(FormContext);
  const error = errors?.answers?.[index];

  const inputData = data.answers.filter(answer => answer.id == answerId) || null;

  const handleChange = (field, value) => {
    setData(data => ({
      ...data,
      answers: data.answers.map(answer =>
        answer.id == answerId ? { ...answer, [field]: value } : answer
      ),
    }));
  };

  const handleChangeImage = ({ file }) => {
    handleChange("image", file);
  };

  const handleDeleteImage = () => {
    handleChange("image", null);

    setErrors(errors => {
      delete errors?.answers?.[index]?.image;

      return errors;
    });
  };

  const handleChangeRadio = () => {
    setData(data => ({
      ...data,
      keys: [answerId],
    }));
  };

  const handleChangeCheckbox = () => {
    setData(data => ({
      ...data,
      keys: data.keys.includes(answerId)
        ? data.keys.filter(key => key != answerId)
        : [...data.keys, answerId],
    }));
  };

  const handleDelete = () => {
    setData(data => ({
      ...data,
      answers: data.answers.filter(answer => answer.id != answerId),
    }));
    setErrors(errors => {
      delete errors?.answers?.[index];

      return errors;
    });
  };

  return (
    <FormControl isInvalid={error?.text}>
      <InputGroup gap={2} alignItems="center">
        {type == "multiple" ? (
          <Checkbox value={answerId} size="lg" onChange={handleChangeCheckbox} isInvalid={false} />
        ) : (
          <Radio value={answerId} size="lg" onChange={handleChangeRadio} isInvalid={false} />
        )}

        <Input
          placeholder={`Відповідь ${index + 1}`}
          autoComplete="off"
          flex={1}
          value={inputData?.text}
          onChange={e => handleChange("text", e.target.value)}
        />
        <ImageField
          error={error?.image}
          handleChange={handleChangeImage}
          handleDelete={handleDeleteImage}
        />
        {removable && (
          <Button variant="ghost" size="small" colorScheme="red" onClick={handleDelete}>
            <Delete boxSize={5} />
          </Button>
        )}
      </InputGroup>
      <FormErrorMessage ml={6}>{error?.text}</FormErrorMessage>
    </FormControl>
  );
}

export default InputField;
