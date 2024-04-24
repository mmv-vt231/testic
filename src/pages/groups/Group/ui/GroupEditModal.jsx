import React from "react";
import { useParams } from "react-router-dom";
import { useEditGroupMutation } from "@store/services/api";

import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";

function GroupEditModal({ name, children }) {
  const { id } = useParams();
  const [editGroup] = useEditGroupMutation();

  const initialData = {
    name,
  };

  const validation = {
    name: { required: true },
  };

  const handleSubmit = async formData => {
    await editGroup({ id, body: formData });
  };

  return (
    <ModalForm
      title="Редагування групи"
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type="edit"
    >
      <InputField name="name" label="Назва групи" placeholder="Введіть назву групи" />
    </ModalForm>
  );
}

export default GroupEditModal;
