import React from "react";
import { useParams } from "react-router-dom";
import { useGetResultQuery } from "@store/services/api";

import { Box, Heading, Stack, Spinner } from "@chakra-ui/react";
import ResultDetails from "./ui/ResultDetails";
import NotFound from "@components/shared/errors/NotFound";
import Answers from "./ui/Answers";

function Result() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetResultQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  const { questions, answers } = data;

  return (
    <Box bg="gray.50" p={4} h="full" overflowY="auto">
      <Stack justify="center" spacing={8} maxW="3xl" mx="auto">
        <Heading size="2xl" mt={4} textAlign="center">
          Результати
        </Heading>
        <ResultDetails data={data} />
        {answers && <Answers questions={questions} answers={answers} />}
      </Stack>
    </Box>
  );
}

export default Result;
