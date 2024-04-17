import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Text,
  Box,
  IconButton,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";

import { Delete, Edit } from "@icons";

function TopicsTopicCard() {
  return (
    <Card>
      <CardBody>
        <Flex flex={1} align="center" justify="space-between">
          <Heading fontSize="2xl">Addition & Subtraction</Heading>
          <ButtonGroup>
            <IconButton icon={<Edit boxSize={5} />} size="small" />
            <IconButton icon={<Delete boxSize={5} />} colorScheme="red" size="small" />
          </ButtonGroup>
        </Flex>
        <Divider borderWidth={1} my={4} borderColor="gray.100" />
        <Flex>
          <Box>
            <Text>
              <Text as="span" fontWeight="bold">
                Створено:
              </Text>{" "}
              16.04.2024
            </Text>
            <Flex gap={2}>
              <Text as="span" fontWeight="bold">
                Питань:
              </Text>{" "}
              <Center w={6} h={6} fontSize="sm" bg="primary.500" color="white" rounded="md">
                11
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

export default TopicsTopicCard;
