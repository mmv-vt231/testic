import { useEffect } from "react";
import { useEditUserPasswordMutation } from "@store/services/api";

import { VStack, Button, Heading, Card, CardBody, useToast } from "@chakra-ui/react";
import Form from "@components/shared/form/Form";
import InputField from "@components/shared/form/InputField";

function ProfileEditPassword() {
  const toast = useToast();
  const [editPassword, { isSuccess }] = useEditUserPasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Успіх",
        description: "Пароль успішно оновлено!",
        status: "success",
      });
    }
  }, [isSuccess]);

  const initialData = {
    password: "",
    newPassword: "",
  };

  const validation = {
    password: { required: true },
    newPassword: { required: true },
  };

  const onSubmit = async data => {
    await editPassword(data);
  };

  return (
    <Card flex="1 1 300px">
      <CardBody>
        <Heading fontSize="2xl">Змінити пароль</Heading>
        <Form initialData={initialData} validation={validation} onSubmit={onSubmit} mt={6}>
          <VStack spacing={2}>
            <InputField
              name="password"
              label="Пароль"
              type="password"
              placeholder="Введіть пароль"
            />
            <InputField
              name="newPassword"
              label="Новий пароль"
              type="password"
              placeholder="Введіть пароль"
            />
            <Button type="submit" mt={4}>
              Змінити
            </Button>
          </VStack>
        </Form>
      </CardBody>
    </Card>
  );
}

export default ProfileEditPassword;
