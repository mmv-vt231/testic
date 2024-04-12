import { useAddGroupMutation } from "@store/services/api";
import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";

function GroupsCreateModal({ children }) {
  const [addGroup] = useAddGroupMutation();

  const initialData = {
    name: "",
  };

  const validation = {
    name: { required: true },
  };

  const handleSubmit = async data => {
    await addGroup(data);
  };

  return (
    <ModalForm
      title="Нова група"
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type="create"
    >
      <InputField name="name" label="Назва" placeholder="Введіть назву групи" />
    </ModalForm>
  );
}

export default GroupsCreateModal;
