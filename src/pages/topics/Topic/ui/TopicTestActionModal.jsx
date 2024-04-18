import { useParams } from "react-router-dom";

import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";
import { useAddTestMutation, useEditTestMutation } from "@store/services/api";

function TopicTestActionModal({ title, data, type, children }) {
  const { id } = useParams();
  const [addTest] = useAddTestMutation();
  const [editTest] = useEditTestMutation();

  const initialData = {
    title: data?.title || "",
  };

  const validation = {
    title: { required: true },
  };

  const handleSubmit = async formData => {
    type == "create"
      ? await addTest({
          id,
          body: formData,
        })
      : await editTest({
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
      <InputField name="title" label="Назва тесту" placeholder="Введіть назву тесту" />
    </ModalForm>
  );
}

export default TopicTestActionModal;
