import React from "react";
import { useParams } from "react-router-dom";

import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";
import { useAddStudentMutation, useEditStudentMutation } from "@store/services/api";

function GroupStudentActionModal({ title, data, type, children }) {
  const { id } = useParams();
  const [addStudent] = useAddStudentMutation();
  const [editStudent] = useEditStudentMutation();

  const initialData = {
    fullName: data?.fullName || "",
    email: data?.email || "",
  };

  const validation = {
    fullName: { required: true },
    email: {
      required: true,
      isEmail: true,
    },
  };

  const handleSubmit = async formData => {
    type == "create"
      ? await addStudent({
          id,
          body: formData,
        })
      : await editStudent({
          id: data.id,
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
      <InputField name="fullName" label="Учень" placeholder="Введіть прізвище та ім'я" />
      <InputField name="email" label="Пошта" placeholder="Введіть пошту" />
    </ModalForm>
  );
}

export default GroupStudentActionModal;
