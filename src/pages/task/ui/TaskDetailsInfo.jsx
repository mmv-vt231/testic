import React from "react";
import dateFormatConverter from "@utils/dateFormatConverter";

import { Button, Text, Stack, Box, HStack, Heading, Flex, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@icons";
import { Clock, QuestionMark } from "@components/shared/Icons";

function TaskDetailsInfo({ data }) {
  const { title, start, end, status, duration, questionsCount, groups } = data;

  const startDate = dateFormatConverter(start, "full");
  const endDate = dateFormatConverter(end, "full");

  const Date = ({ title, date }) => (
    <Box pos="relative">
      <Text fontWeight="bold" pos="absolute" top={0}>
        {title}:
      </Text>
      <Badge mt={6}>{date}</Badge>
    </Box>
  );

  const Groups = () => (
    <HStack spacing={0}>
      {groups.map(({ id, name }, i) => (
        <Button
          key={id}
          as={Link}
          to={`/panel/groups/${id}`}
          variant="link"
          fontWeight="normal"
          color="gray.400"
        >
          {`${name}${i != groups.length - 1 ? "," : ""}`}
        </Button>
      ))}
    </HStack>
  );

  const Status = () => {
    switch (status) {
      case "planned":
        return (
          <Badge colorScheme="orange" variant="subtle">
            Заплановий
          </Badge>
        );
      case "active":
        return (
          <Badge colorScheme="green" variant="subtle">
            Активний
          </Badge>
        );
      case "finished":
        return (
          <Badge colorScheme="red" variant="subtle">
            Закінчений
          </Badge>
        );
    }
  };

  return (
    <Flex align="start" justify="space-between">
      <Stack>
        <HStack>
          <Heading fontSize="3xl">{title}</Heading>
          <Status />
        </HStack>
        <Stack>
          <HStack spacing={1} flexWrap="wrap">
            <Date title="Початок" date={startDate} />
            <ArrowRight
              display={{ base: "none", md: "block" }}
              fill="gray.700"
              boxSize={5}
              mt={5}
            />
            <Date title="Кінець" date={endDate} />
          </HStack>
          <HStack spacing={1} flexWrap="wrap">
            <Text fontWeight="bold" color="gray.400">
              Групи:
            </Text>
            <Groups />
          </HStack>
        </Stack>
      </Stack>
      <HStack>
        <Badge variant="outline" colorScheme="gray" h="auto" px={3} py={2}>
          <Clock />
          {duration} хв
        </Badge>
        <Badge variant="outline" colorScheme="gray" h="auto" px={3} py={2}>
          <QuestionMark />
          {questionsCount}
        </Badge>
      </HStack>
    </Flex>
  );
}

export default TaskDetailsInfo;
