import React, { useContext, useState } from "react";
import { FormContext } from "@components/shared/form/Form";
import letterFromIndex from "@utils/letterFromIndex";
import { API_HOST } from "@config/constants";

import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Text,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import ImageField from "@components/shared/form/ImageField";
import { Delete } from "@icons";

function InputField({ index, id, type, placeholder, removable }) {
  const { data, setData, errors, setErrors } = useContext(FormContext);

  const { image: answerImage, text } = data.data[type].filter(field => field.id == id)?.[0];
  const [image, setImage] = useState(answerImage && `${API_HOST}/${answerImage}`);

  const error = errors?.data?.[type]?.[index];

  const handleChange = (field, value) => {
    setData(prevData => ({
      ...prevData,
      data: {
        ...prevData.data,
        [type]: prevData.data[type].map(fieldData => {
          const text = field == "image" && !value ? "" : null;

          return fieldData.id == id ? { ...fieldData, text, [field]: value } : fieldData;
        }),
      },
    }));
  };

  const handleDelete = () => {
    setData(prevData => {
      const keys =
        type == "questions"
          ? prevData.keys.filter(key => key.question != id)
          : type == "answers"
          ? prevData.keys.map(key => (key.answer == id ? { ...key, answer: null } : key))
          : prevData.keys;

      return {
        ...prevData,
        keys,
        data: {
          ...prevData.data,
          [type]: prevData.data[type].filter(field => field.id != id),
        },
      };
    });
    setErrors(errors => {
      delete errors?.data?.[type]?.[index];

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
      delete errors?.data?.[type]?.[index];

      return errors;
    });
  };

  return (
    <FormControl isInvalid={error}>
      <InputGroup gap={2} alignItems="center">
        <Text fontSize="lg" color="gray.300" w={6} textAlign="center">
          {type == "answers" ? letterFromIndex(index) : index + 1}
        </Text>

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
              placeholder={`${placeholder} ${index + 1}`}
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
