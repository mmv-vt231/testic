import React from "react";

import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { QuestionMark, Stars, CheckRound, CancelRound, Average, Clock } from "@icons";
import RoundedIcon from "@components/shared/Icons/RoundedIcon";

function Cards({ data }) {
  const { questionsCount, score, totalScore, correct, half, wrong, duration } = data;

  const cardsData = [
    {
      name: "Питань",
      value: questionsCount,
      Icon: QuestionMark,
      color: null,
    },
    {
      name: "Бали",
      value: `${score} / ${totalScore}`,
      Icon: Stars,
      color: "orange",
    },
    {
      name: "Правильно",
      value: correct,
      Icon: CheckRound,
      color: "green",
    },
    {
      name: "Неправильно",
      value: wrong,
      Icon: CancelRound,
      color: "red",
    },
    {
      name: "Частково",
      value: half,
      Icon: Average,
      color: "orange",
    },
    {
      name: "Витрачено",
      value: duration,
      Icon: Clock,
      color: null,
    },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} flex="1 1 200px">
      {cardsData.map(({ name, value, Icon, color }, i) => (
        <HStack key={i} spacing={3} rounded="md" border="1px solid" borderColor="gray.400" p={4}>
          <RoundedIcon Icon={Icon} color={color} icon={{ boxSize: 7 }} />
          <Box>
            <Text color="gray.400">{name}</Text>
            <Text fontSize="xl" fontWeight="bold">
              {value}
            </Text>
          </Box>
        </HStack>
      ))}
    </SimpleGrid>
  );
}

export default Cards;
