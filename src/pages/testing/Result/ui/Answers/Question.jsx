import React from "react";
import { API_HOST } from "@config/constants";
import isEmpty from "@utils/isEmpty";

import { Box, Divider, HStack, Image, Text, Badge } from "@chakra-ui/react";
import { Stars } from "@icons";
import SingleOrMultiple from "./SingleOrMultiple";
import Order from "./Order";
import Relation from "./Relation";

function Question({ question, studentAnswer = {} }) {
  const { title, image, points: questionPoints, type, data } = question;
  const { points: answerPoints = 0, answer } = studentAnswer;

  return (
    <Box>
      <Divider colorScheme="red" my={4} borderBottomWidth={1} borderColor="gray.300" />
      <HStack spacing={4}>
        {image && <Image src={`${API_HOST}/${image}`} maxH={75} />}
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Badge variant="outline" colorScheme="gray" h="auto" px={3} py={2} ml="auto">
          <Stars fill="orange.400" boxSize={5} /> {answerPoints} / {questionPoints}
        </Badge>
      </HStack>
      <Divider colorScheme="red" my={4} borderBottomWidth={1} borderColor="gray.300" />
      {isEmpty(studentAnswer) && (
        <Text color="red" mb={2}>
          Відповідь відсутня
        </Text>
      )}
      {(type == "single" || type == "multiple") && (
        <SingleOrMultiple data={data} answer={answer} type={type} />
      )}
      {type == "relation" && <Relation data={data} answer={answer} />}
      {type == "order" && <Order data={data} answer={answer} />}
    </Box>
  );
}

export default Question;
