import { useParams } from "react-router-dom";

import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";
import ImageField from "@components/shared/form/ImageField";
import { Flex } from "@chakra-ui/react";
import Answers from "./Answers";
/* import { useAddStudentMutation } from "@store/services/api"; */

function TestQuestionCreateModal({ title, type, children }) {
  const { id } = useParams();
  /* const [addStudent] = useAddStudentMutation(); */

  const initialData = {
    title: "",
    image: null,
    type: "single",
    points: 1,
    answers: [],
    keys: [],
  };

  const validation = {
    title: { required: true },
    image: {
      extensions: ["png", "jpg", "jpeg", "svg"],
    },
    points: {
      required: true,
      min: 0,
      max: 100,
    },
    answers: {
      type: "objectArray",
      rules: {
        text: {
          required: true,
        },
        image: {
          extensions: ["png", "jpg", "jpeg", "svg"],
        },
      },
    },
    keys: {
      answerRequired: true,
    },
  };

  const handleSubmit = async formData => {
    console.log(formData);
    /*  addStudent({
      id,
      body: formData,
    }); */
  };

  return (
    <ModalForm
      title={title}
      size="3xl"
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type={type}
      encType="multipart/form-data"
    >
      <Flex w="full" gap={2}>
        <InputField
          name="title"
          label="Питання"
          placeholder="Введіть питання"
          RightElement={<ImageField name="image" />}
        />
      </Flex>
      <Answers />
    </ModalForm>
  );
}

export default TestQuestionCreateModal;
