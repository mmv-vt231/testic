import { useDispatch, useSelector } from "react-redux";
import { Heading, VStack, Button } from "@chakra-ui/react";

import { Email, Lock } from "@components/shared/Icons";
import Form from "@components/shared/form/Form";
import InputField from "@components/shared/form/InputField";
import { loginUser } from "@store/features/auth/authActions";

function Login() {
  const { loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const initialData = {
    email: "",
    password: "",
  };

  const validation = {
    email: {
      required: true,
      isEmail: true,
    },
    password: { required: true },
  };

  const onSubmit = data => dispatch(loginUser(data));

  return (
    <>
      <Heading size="2xl" textAlign="center">
        Вхід
      </Heading>
      <Form initialData={initialData} validation={validation} onSubmit={onSubmit} mt={4}>
        <VStack spacing={2}>
          <InputField name="email" label="Пошта" placeholder="Введіть пошту" Icon={Email} />
          <InputField
            name="password"
            label="Пароль"
            type="password"
            placeholder="Введіть пароль"
            Icon={Lock}
          />
          <Button type="submit" isLoading={loading} mt={4}>
            Увійти
          </Button>
        </VStack>
      </Form>
    </>
  );
}

export default Login;
