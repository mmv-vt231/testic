import React from "react";
import { useParams } from "react-router-dom";
import { useEditTopicMutation } from "@store/services/api";

import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";

function TopicEditModal({ title, children }) {
  const { id } = useParams();
  const [editTopic] = useEditTopicMutation();

  const initialData = {
    title,
  };

  const validation = {
    title: { required: true },
  };

  const handleSubmit = async formData => {
    await editTopic({ id, body: formData });
  };

  return (
    <ModalForm
      title="Редагування теми"
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type="edit"
    >
      <InputField name="title" label="Назва теми" placeholder="Введіть назву теми" />
    </ModalForm>
  );
}

export default TopicEditModal;
