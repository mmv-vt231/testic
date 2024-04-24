import React from "react";
import { useEffect } from "react";
import { useEditUserDataMutation } from "@store/services/api";

import { VStack, Button, Heading, Card, CardBody, useToast } from "@chakra-ui/react";
import Form from "@components/shared/form/Form";
import InputField from "@components/shared/form/InputField";

function ProfileEditData({ userData }) {
  const [editUserData, { isSuccess }] = useEditUserDataMutation();
  const { name, surname } = userData;
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Успіх",
        description: "Дані успішно оновлено!",
        status: "success",
      });
    }
  }, [isSuccess]);

  const initialData = {
    name,
    surname,
  };

  const validation = {
    name: {
      required: true,
    },
    surname: {
      required: true,
    },
  };

  const onSubmit = async data => {
    await editUserData(data);
  };

  return (
    <Card flex="1 1 300px">
      <CardBody>
        <Heading fontSize="2xl">Змінити дані</Heading>
        <Form initialData={initialData} validation={validation} onSubmit={onSubmit} mt={6}>
          <VStack spacing={2}>
            <InputField name="name" label="Ім'я" placeholder="Введіть ім'я" />
            <InputField name="surname" label="Прізвище" placeholder="Введіть прізвище" />
            <Button type="submit" mt={4}>
              Змінити
            </Button>
          </VStack>
        </Form>
      </CardBody>
    </Card>
  );
}

export default ProfileEditData;
