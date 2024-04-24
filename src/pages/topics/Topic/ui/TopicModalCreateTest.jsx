import React from "react";
import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";
import { useAddTestMutation } from "@store/services/api";

function TopicModalCreateTest({ title, topicId, type, children }) {
  const [addTest] = useAddTestMutation();

  const initialData = {
    title: "",
  };

  const validation = {
    title: { required: true },
  };

  const handleSubmit = async formData => {
    await addTest({
      id: topicId,
      body: formData,
    });
  };

  return (
    <ModalForm
      title={title}
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type={type}
    >
      <InputField name="title" label="Назва тесту" placeholder="Введіть назву тесту" />
    </ModalForm>
  );
}

export default TopicModalCreateTest;
