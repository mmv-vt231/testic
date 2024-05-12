import React from "react";
import { useAddAnswerMutation } from "@store/services/api";

import Form from "@components/shared/form/Form";
import { Button, Flex } from "@chakra-ui/react";
import ErrorMessage from "./ErrorMessage";
import SingleOrMultiple from "./SingleOrMultiple";
import Relation from "./Relation";
import Order from "./Order";

function PassingForm({ testingId, data }) {
  const [addAnswer] = useAddAnswerMutation();
  const { type } = data;

  const initialData = {
    answer: [],
  };

  const handleSubmit = async formData => {
    formData.questionId = data.id;
    await addAnswer({ id: testingId, body: formData });
  };

  return (
    <Form initialData={initialData} onSubmit={handleSubmit} reset w="full" mt={4}>
      {(type == "single" || type == "multiple") && (
        <SingleOrMultiple answers={data.data.answers} type={type} />
      )}
      {type == "relation" && <Relation data={data.data} />}
      {type == "order" && <Order answers={data.data.answers} />}
      <ErrorMessage />
      <Flex justify="center" mt={8}>
        <Button type="submit" fontSize="xl" size="xl" py="20px" w="full" isLoading={false}>
          Відповісти
        </Button>
      </Flex>
    </Form>
  );
}

export default PassingForm;
