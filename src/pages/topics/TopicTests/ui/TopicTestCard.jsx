import React from "react";
import dateFormatConverter from "@utils/dateFormatConverter";

import {
  Button,
  Card,
  CardBody,
  Flex,
  Text,
  Box,
  Divider,
  Stack,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TopicTaskModalCreate from "./TopicTaskModalCreate";

function TopicTestCard({ data }) {
  const { id, title, questions = 0, createdAt } = data;
  const formattedDate = dateFormatConverter(createdAt);

  return (
    <Card minH={180}>
      <CardBody as={Stack} spacing={0}>
        <Flex align="center" justify="space-between">
          <Button as={Link} to={`/panel/tests/${id}`} variant="link" fontSize="2xl">
            {title}
          </Button>
        </Flex>
        <Divider borderBottomWidth={2} my={4} borderColor="gray.100" />
        <Flex flex={1}>
          <Box>
            <HStack>
              <Text fontWeight="bold">Створено:</Text>
              <Text>{formattedDate}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Питань:</Text>
              <Badge>{questions}</Badge>
            </HStack>
          </Box>
          <TopicTaskModalCreate testId={id}>
            <Button p={4} mt="auto" ml="auto">Тестування</Button>
          </TopicTaskModalCreate>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default TopicTestCard;
