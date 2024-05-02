import React from "react";
import { useParams } from "react-router-dom";
import { useGetTestQuery } from "@store/services/api";

import { Box, Spinner } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import TestHeader from "./ui/TestHeader";
import TestQuestionList from "./ui/TestQuestionList";

function Test() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTestQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  console.log(data);

  const { title, questions } = data;

  return (
    <Box>
      <TestHeader title={title} />
      <TestQuestionList data={questions} />
    </Box>
  );
}

export default Test;
