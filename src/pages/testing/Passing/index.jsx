import React from "react";
import { API_HOST } from "@config/constants";
import { Navigate, useParams } from "react-router-dom";
import { useGetQuestionQuery, useGetTimeQuery } from "@store/services/api";

import { Box, Heading, Spinner, Image, HStack } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import PassingForm from "./ui/PassingForm";
import PassingHeader from "./ui/PassingHeader";

function Passing() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetQuestionQuery(id);
  const { data: time, isLoading: isLoadingTime, isError: isErrorTime } = useGetTimeQuery(id);

  if (isLoading || isLoadingTime) return <Spinner />;
  if (isError || isErrorTime) return <NotFound />;
  if (data == null) return <Navigate to={`/test/result/${id}`} replace={true} />;

  const { title, image, questionOrder, totalQuestions } = data;

  return (
    <Box bg="gray.50" p={4} h="full" overflowY="auto">
      <PassingHeader
        id={id}
        defaultTime={time.seconds}
        order={questionOrder}
        total={totalQuestions}
      />
      <HStack
        minH={200}
        flexDirection={{ base: "column", lg: "row" }}
        spacing={5}
        bg="white"
        p={4}
        border="1px solid"
        borderColor="gray.300"
        rounded="xl"
      >
        {image && <Image maxH={250} src={`${API_HOST}/${image}`} />}
        <Heading size="lg">{title}</Heading>
      </HStack>
      <PassingForm data={data} testingId={id} />
    </Box>
  );
}

export default Passing;
