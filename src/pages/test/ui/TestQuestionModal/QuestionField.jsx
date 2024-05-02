import React, { useContext } from "react";
import { FormContext } from "@components/shared/form/Form";
import { API_HOST } from "@config/constants";

import InputField from "@components/shared/form/InputField";
import ImageField from "@components/shared/form/ImageField";
import { Flex, Image, Text, Box } from "@chakra-ui/react";

function QuestionField() {
  const { data, errors } = useContext(FormContext);
  const image =
    (data?.image instanceof File && URL.createObjectURL(data?.image)) ||
    (data?.image && `${API_HOST}/${data.image}`);

  const error = errors?.image;

  return (
    <Flex w="full" gap={2}>
      <Box flex={1}>
        <InputField
          name="title"
          label="Питання"
          placeholder="Введіть питання"
          LeftElement={image && <Image src={image} alt="Картинка" h={50} objectFit="contain" />}
          RightElement={<ImageField defaultImage={image} name="image" />}
        />
        {error && (
          <Text fontSize="sm" color="red.500">
            {error}
          </Text>
        )}
      </Box>
    </Flex>
  );
}

export default QuestionField;
