import { useContext, useState, useEffect } from "react";
import { FormContext } from "@components/shared/form/Form";

import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Radio,
  Stack,
  Button,
  RadioGroup,
} from "@chakra-ui/react";
import { Delete } from "@icons";
import NumberField from "@components/shared/form/NumberField";
import ImageField from "@components/shared/form/ImageField";

function Single() {
  const { data, setData, errors } = useContext(FormContext);

  useEffect(() => {
    handleCreate();
    handleCreate();
  }, []);

  const handleCreate = () => {
    const id = crypto.randomUUID();

    setData(data => ({
      ...data,
      answers: [...data.answers, { id, text: "", image: null }],
    }));
  };

  return (
    <RadioGroup as={Stack} defaultValue="1">
      {data.answers.map(({ id }, i) => (
        <InputField key={id} answerId={id} placeholder={`Відповідь ${i + 1}`} removable={i > 1} />
      ))}
      <Button variant="ghost" size="md" color="primary.500" m="0 auto" onClick={handleCreate}>
        + Додати відповідь
      </Button>
      <NumberField
        name="points"
        label="Бали"
        sx={{ label: { textAlign: "center", mb: 0 } }}
        maxW={85}
        ml="auto"
      />
    </RadioGroup>
  );
}

function InputField({ answerId, placeholder, removable }) {
  const { data, setData, errors } = useContext(FormContext);
  const [id] = useState(answerId);

  const inputData = data.answers.filter(answer => answer.id == id) || null;

  const handleChange = (field, value) => {
    setData(data => ({
      ...data,
      answers: data.answers.map(answer =>
        answer.id == id ? { ...answer, [field]: value } : answer
      ),
    }));
  };

  const handleChangeImage = ({ file }) => {
    handleChange("image", file);
  };

  const handleDeleteImage = () => {
    handleChange("image", null);
  };

  const handleChangeCorrectAnswer = () => {
    setData(data => ({
      ...data,
      keys: [id],
    }));
  };

  const handleDelete = () => {
    setData(data => ({
      ...data,
      answers: data.answers.filter(answer => answer.id != id),
    }));
  };

  return (
    <FormControl /* isInvalid={!!errors[name]} */>
      <InputGroup gap={2} alignItems="center">
        <Radio value={id} onChange={handleChangeCorrectAnswer} />
        <Input
          placeholder={placeholder}
          autoComplete="off"
          flex={1}
          value={inputData?.text}
          onChange={e => handleChange("text", e.target.value)}
        />
        <ImageField handleChange={handleChangeImage} handleDelete={handleDeleteImage} />
        {removable && (
          <Button variant="ghost" size="small" colorScheme="red" onClick={handleDelete}>
            <Delete boxSize={5} />
          </Button>
        )}
      </InputGroup>
      {/* <FormErrorMessage>{errors[name]}</FormErrorMessage> */}
    </FormControl>
  );
}

export default Single;
