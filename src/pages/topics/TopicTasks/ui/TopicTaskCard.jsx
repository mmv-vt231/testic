import React from "react";
import dateFormatConverter from "@utils/dateFormatConverter";

import {
  Button,
  Card,
  CardBody,
  Flex,
  Text,
  Divider,
  Stack,
  Box,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@icons";
import Copy from "@components/shared/Button/Copy";

function TopicTaskCard({ data }) {
  const { id, title, status, start, end, groups } = data;

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
    <Card minH={180}>
      <CardBody as={Stack} spacing={0}>
        <HStack justify="space-between">
          <Button as={Link} to={`/panel/tasks/${id}`} variant="link" fontSize="2xl">
            {title}
          </Button>
          <Copy text={`${location.origin}/test/start/${id}`} />
        </HStack>
        <Divider borderBottomWidth={2} my={4} borderColor="gray.100" />
        <Stack>
          <Flex justify="space-between">
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
            <Status />
          </Flex>
          <HStack spacing={1} flexWrap="wrap">
            <Text fontWeight="bold" color="gray.400">
              Групи:
            </Text>
            <Groups />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default TopicTaskCard;
