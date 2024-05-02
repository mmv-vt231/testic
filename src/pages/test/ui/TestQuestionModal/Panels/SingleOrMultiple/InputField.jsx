import React, { useContext, useState } from "react";
import { FormContext } from "@components/shared/form/Form";
import { API_HOST } from "@config/constants";

import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Radio,
  Checkbox,
  Button,
  Flex,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import ImageField from "@components/shared/form/ImageField";
import { Delete } from "@icons";

function InputField({ index, type, answerId, removable }) {
  const { data, setData, errors, setErrors } = useContext(FormContext);

  const { image: answerImage, text } = data.data.answers.filter(
    answer => answer.id == answerId
  )?.[0];
  const [image, setImage] = useState(answerImage && `${API_HOST}/${answerImage}`);

  const error = errors.data?.answers?.[index];

  const handleChange = (field, value) => {
    setData(data => ({
      ...data,
      data: {
        ...data.data,
        answers: data.data.answers.map(answer => {
          const text = field == "image" && !value ? "" : null;

          return answer.id == answerId ? { ...answer, text, [field]: value } : answer;
        }),
      },
    }));
  };

  const handleDelete = () => {
    setData(data => ({
      ...data,
      data: {
        ...data.data,
        answers: data.data.answers.filter(answer => answer.id != answerId),
      },
    }));
    setErrors(errors => {
      delete errors?.data?.answers?.[index];

      return errors;
    });
  };

  const handleChangeImage = ({ file }) => {
    handleChange("image", file);

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    handleChange("image", null);
    setImage(null);

    setErrors(errors => {
      delete errors?.data?.answers?.[index];

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

  return (
    <FormControl isInvalid={error}>
      <InputGroup gap={2} alignItems="center">
        {type == "multiple" ? (
          <Checkbox value={answerId} size="lg" onChange={handleChangeCheckbox} isInvalid={false} />
        ) : (
          <Radio value={answerId} size="lg" onChange={handleChangeRadio} isInvalid={false} />
        )}

        <Box flex={1}>
          {image ? (
            <Flex
              align="center"
              border="1px solid var(--chakra-colors-gray-300)"
              color="gray.400"
              rounded="md"
              px={4}
              aria-invalid={!!error?.image}
              _invalid={{ color: "red.500", border: "2px solid var(--chakra-colors-red-500)" }}
            >
              <Image src={image} alt="Картинка" h={50} objectFit="contain" />
              <Text flex={1} color="inherit" ml={2}>
                Зображення
              </Text>
            </Flex>
          ) : (
            <Input
              placeholder={`Відповідь ${index + 1}`}
              autoComplete="off"
              flex={1}
              value={text || ""}
              onChange={e => handleChange("text", e.target.value)}
            />
          )}
        </Box>

        <ImageField
          defaultImage={image}
          handleChange={handleChangeImage}
          handleDelete={handleDeleteImage}
        />
        {removable && (
          <Button variant="ghost" size="small" colorScheme="red" onClick={handleDelete}>
            <Delete boxSize={5} />
          </Button>
        )}
      </InputGroup>
      <FormErrorMessage ml={6}>{error?.image || error?.text}</FormErrorMessage>
    </FormControl>
  );
}

export default InputField;
