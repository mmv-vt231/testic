import dateFormatConverter from "@utils/dateFormatConverter";

import { Button, Card, CardBody, Center, Flex, Text, Box, Divider, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Divider borderWidth={1} my={4} borderColor="gray.100" />
        <Flex flex={1}>
          <Box>
            <Text>
              <Text as="span" fontWeight="bold" mr={2}>
                Створено:
              </Text>
              {formattedDate}
            </Text>
            <Flex gap={2}>
              <Text as="span" fontWeight="bold" mr={2}>
                Питань:
              </Text>
              <Center w={6} h={6} fontSize="sm" bg="primary.500" color="white" rounded="md">
                {questions}
              </Center>
            </Flex>
          </Box>
          <Button p={4} mt="auto" ml="auto">
            Запланувати
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default TopicTestCard;
