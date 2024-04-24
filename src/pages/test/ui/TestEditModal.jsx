import React from "react";
import { useParams } from "react-router-dom";
import { useEditTestMutation } from "@store/services/api";

import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";

function TestEditModal({ title, children }) {
  const { id } = useParams();
  const [editTest] = useEditTestMutation();

  const initialData = {
    title,
  };

  const validation = {
    title: { required: true },
  };

  const handleSubmit = async formData => {
    await editTest({ id, body: formData });
  };

  return (
    <ModalForm
      title="Редагування тесту"
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type="edit"
    >
      <InputField name="title" label="Назва тесту" placeholder="Введіть назву тесту" />
    </ModalForm>
  );
}

export default TestEditModal;
