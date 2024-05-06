import React from "react";
import { useParams } from "react-router-dom";
import { useAddTaskMutation, useEditTaskMutation } from "@store/services/api";

import ModalForm from "@components/shared/Modal/ModalForm";
import InputField from "@components/shared/form/InputField";
import NumberField from "@components/shared/form/NumberField";
import { Stack, Flex } from "@chakra-ui/react";
import CheckboxList from "./CheckboxList";
import SelectField from "./SelectField";

function TopicTaskModalAction({ title, testId, data, children, type }) {
  const { id } = useParams();
  const [addTask] = useAddTaskMutation();
  const [editTask] = useEditTaskMutation();

  const initialData = data || {
    start: "",
    end: "",
    groups: [],
    duration: 20,
    oneChance: true,
    showAnswers: false,
    shuffle: false,
  };

  const validation = {
    start: { required: true },
    end: { required: true },
    groups: {
      groupRequired: true
    },
    duration: { 
      required: true,
      min: 1,
      max: 300,
    },
  };

  const handleSubmit = async formData => {
    formData.groups = formData.groups.map(el => el.id);
    
    if(type == "edit") {
      await editTask({
        id,
        body: formData
      });
    } else {
      formData.topicId = id;
      
      await addTask({
        id: testId,
        body: formData,
      });
    }
  };

  return (
    <ModalForm
      title={title}
      initialData={initialData}
      validation={validation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type={type}
      size="lg"
    >
      <Flex gap={8} flexWrap="wrap">
        <Stack flex="1 1 200px">
          <InputField name="start" label="Дата початку" type="datetime-local" />
          <InputField name="end" label="Дата кінця" type="datetime-local"  />
          <SelectField />
          <NumberField name="duration" label="Тривалість (хв)"/>
        </Stack>
        <CheckboxList/>
      </Flex>
    </ModalForm>
  );
}

export default TopicTaskModalAction;
