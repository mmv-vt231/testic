import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heading, VStack, Button, useToast } from "@chakra-ui/react";
import { Email, Lock, Person } from "@components/shared/Icons";

import Form from "@components/shared/form/Form";
import InputField from "@components/shared/form/InputField";
import { registerUser } from "@store/features/auth/authActions";

function Register() {
  const toast = useToast();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) navigate("/auth/login");
  }, [success]);

  useEffect(() => {
    if (error) {
      toast({
        status: "error",
        title: "Помилка",
        description: error,
        position: "top-right",
        isClosable: true,
      });
    }
  }, [error]);

  const initialData = {
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const validation = {
    name: {
      required: true,
    },
    surname: {
      required: true,
    },
    email: {
      required: true,
      pattern: "^[\\w-.]+@([\\w-]+.)+[\\w-]{2,4}$",
    },
    password: { required: true },
    repeatPassword: { required: true, equalTo: "password" },
  };

  const onSubmit = data => dispatch(registerUser(data));

  return (
    <>
      <Heading size="2xl" textAlign="center">
        Реєстрація
      </Heading>
      <Form initialData={initialData} validation={validation} onSubmit={onSubmit} mt={4}>
        <VStack spacing={2}>
          <InputField name="name" label="Ім'я" placeholder="Введіть ім'я" Icon={Person} />
          <InputField
            name="surname"
            label="Прізвище"
            placeholder="Введіть прізвище"
            Icon={Person}
          />
          <InputField name="email" label="Пошта" placeholder="Введіть пошту" Icon={Email} />
          <InputField name="password" label="Пароль" placeholder="Введіть пароль" Icon={Lock} />
          <InputField
            name="repeatPassword"
            label="Пароль"
            placeholder="Введіть пароль"
            Icon={Lock}
          />
          <Button type="submit" isLoading={loading} mt={4}>
            Зареєструватися
          </Button>
        </VStack>
      </Form>
    </>
  );
}

export default Register;
