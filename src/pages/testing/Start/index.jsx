import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStartTestingMutation, useGetTaskStartInfoQuery } from "@store/services/api";

import {
  Flex,
  Image,
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  Divider,
  Button,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import Form from "@components/shared/form/Form";
import InputField from "@components/shared/form/InputField";
import { Email } from "@components/shared/Icons";
import img from "@/assets/images/photos/intro.svg";

function Start() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetTaskStartInfoQuery(id);
  const [startTesting, { isLoading: isStartingTest }] = useStartTestingMutation();

  const initialData = {
    email: "",
  };

  const validation = {
    email: {
      required: true,
      isEmail: true,
    },
  };

  const onSubmit = async data => {
    await startTesting({ id, body: data })
      .unwrap()
      .then(path => {
        navigate(`/test/passing/${path}`);
      });
  };

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  const { title, questionsCount, duration, oneChance } = data;

  return (
    <Flex h="full">
      <Flex flex="1 1 50%" justify="center" align="center" hideBelow="md">
        <Box maxW={500} w="full">
          <Image src={img} alt="Тестування" />
        </Box>
      </Flex>
      <Flex pos="relative" flex="1 1 50%" justify="center" align="center" bg="gray.50">
        <Stack maxW={400} w="full" p={4} align="center">
          <Heading size="2xl">Тестування</Heading>
          <Text fontSize="xl">{title}</Text>
          <HStack mt={12} textAlign="center" w="full">
            <Box flex={1}>
              <Text color="gray.400">Питань</Text>
              <Text fontWeight="bold" fontSize="3xl">
                {questionsCount}
              </Text>
            </Box>
            <Divider orientation="vertical" h={100} borderColor="gray.400" />
            <Box flex={1}>
              <Text color="gray.400">Час</Text>
              <Text color="gray.400">
                <Text as="span" fontWeight="bold" fontSize="3xl" color="gray.700" mr={1}>
                  {duration}
                </Text>
                хв
              </Text>
            </Box>
          </HStack>
          {oneChance && (
            <Text fontStyle="italic" fontSize="sm" color="red">
              * Цей тест можна пройти лише один раз
            </Text>
          )}
          <Form
            initialData={initialData}
            validation={validation}
            onSubmit={onSubmit}
            mt={8}
            w="full"
          >
            <VStack spacing={4}>
              <InputField
                name="email"
                label="Пошта"
                placeholder="Введіть пошту"
                Icon={Email}
                autoComplete
              />
              <Button type="submit" isLoading={isStartingTest}>
                Розпочати
              </Button>
            </VStack>
          </Form>
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Start;
