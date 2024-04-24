import { useContext, useEffect, useRef } from "react";
import { FormContext } from "@components/shared/form/Form";

import {
  Stack,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Flex,
  Text,
} from "@chakra-ui/react";
import ImageField from "@components/shared/form/ImageField";
import { Delete } from "@icons";

function Relation() {
  const isMounted = useRef(false);
  const { data, setData } = useContext(FormContext);

  useEffect(() => {
    if (!isMounted.current) {
      handleCreate();
      handleCreate();
      isMounted.current = true;
    }
  }, []);

  const handleCreate = () => {
    const id = crypto.randomUUID();

    setData(data => ({
      ...data,
      answers: [...data.answers, { id, text: "", image: null }],
    }));
  };

  return (
    <Flex gap={5}>
      <Stack flex={1}>
        {data.answers.map(({ id }, i) => (
          <InputField
            key={id}
            index={i}
            type="numbers"
            placeholder={`Питання ${i + 1}`}
            answerId={id}
            removable={i > 1}
          />
        ))}
        {data.answers.length < 10 && (
          <Button variant="ghost" size="md" color="primary.500" m="0 auto" onClick={handleCreate}>
            + Додати питання
          </Button>
        )}
      </Stack>
      <Stack flex={1}>
        {data.answers.map(({ id }, i) => (
          <InputField
            key={id}
            index={i}
            type="alphabet"
            placeholder={`Відповідь ${i + 1}`}
            answerId={id}
            removable={i > 1}
          />
        ))}
        {data.answers.length < 10 && (
          <Button variant="ghost" size="md" color="primary.500" m="0 auto" onClick={handleCreate}>
            + Додати відповідь
          </Button>
        )}
      </Stack>
    </Flex>
  );
}

function InputField({ index, answerId, type, placeholder, removable }) {
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

  const handleChangeCorrectAnswer = () => {
    setData(data => ({
      ...data,
      keys: [answerId],
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
        <Text fontSize="lg" color="gray.300" w={6} textAlign="center">
          {type == "alphabet" ? String.fromCharCode(65 + index) : index + 1}
        </Text>
        <Input
          placeholder={placeholder}
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

export default Relation;
