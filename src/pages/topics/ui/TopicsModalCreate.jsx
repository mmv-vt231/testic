import { useAddTopicMutation } from "@store/services/api";
import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";

function TopicsCreateModal({ children }) {
  const [addTopic] = useAddTopicMutation();

  const initialData = {
    title: "",
  };

  const validation = {
    title: { required: true },
  };

  const handleSubmit = async data => {
    await addTopic(data);
    console.log(data);
  };

  return (
    <ModalForm
      title="Нова тема"
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type="create"
    >
      <InputField name="title" label="Назва" placeholder="Введіть назву теми" />
    </ModalForm>
  );
}

export default TopicsCreateModal;
