import React from "react";

import { Text, Box, HStack, SimpleGrid } from "@chakra-ui/react";
import { Person, CheckRound, CancelRound, Average } from "@icons";
import RoundedIcon from "@components/shared/Icons/RoundedIcon";

function TaskDetailsCards({ studentsCount, completedCount, uncompletedCount, averageScore }) {
  const cardsData = [
    {
      name: "Всього учнів",
      value: studentsCount,
      Icon: Person,
      color: null,
    },
    {
      name: "Виконали",
      value: completedCount,
      Icon: CheckRound,
      color: "green",
    },
    {
      name: "Не виконали",
      value: uncompletedCount,
      Icon: CancelRound,
      color: "red",
    },
    {
      name: "Середній бал",
      value: averageScore,
      Icon: Average,
      color: "orange",
    },
  ];

  return (
    <SimpleGrid columns={{ base: 1, lg: 2, xl: 3, "2xl": 4 }} gap={4} w="full" mt={4}>
      {cardsData.map(({ name, value, Icon, color }, i) => (
        <HStack key={i} spacing={3} rounded="md" border="1px solid" borderColor="gray.400" p={4}>
          <RoundedIcon Icon={Icon} color={color} icon={{ boxSize: 7 }} />
          <Box>
            <Text color="gray.400">{name}</Text>
            <Text fontSize="2xl" fontWeight="bold">
              {value}
            </Text>
          </Box>
        </HStack>
      ))}
    </SimpleGrid>
  );
}

export default TaskDetailsCards;
