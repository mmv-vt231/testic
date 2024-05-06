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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@icons";

function TopicTaskCard({ data }) {
  const { id, title, start, end, groups } = data;

  const startDate = dateFormatConverter(start, "full");
  const endDate = dateFormatConverter(end, "full");

  const Date = ({title, date}) => (
    <Box pos="relative">
      <Text fontSize="sm" fontWeight="bold" pos="absolute" top={0}>{title}:</Text>
      <Text bg="primary.500" rounded="md" color="white" fontWeight="bold" px={1} fontSize="sm" mt={5}>{date}</Text>
    </Box>
  )

  return (
    <Card minH={180}>
      <CardBody as={Stack} spacing={0}>
        <Flex align="center" justify="space-between">
          <Button as={Link} to={`/panel/tasks/${id}`} variant="link" fontSize="2xl">
            {title}
          </Button>
        </Flex>
        <Divider borderBottomWidth={2} my={4} borderColor="gray.100" />
        <Stack>
          <HStack spacing={1} flexWrap="wrap">
            <Date title="Початок" date={startDate} />
            <ArrowRight display={{base: "none", md: "block"}} fill="gray.700" boxSize={5} mt={5}/>
            <Date title="Кінець" date={endDate} />
          </HStack>
          <HStack spacing={1} flexWrap="wrap">
            <Text fontWeight="bold">Групи:</Text>
            {groups.map(({id, name}, i) => (
              <Button key={id} as={Link} to={`/panel/groups/${id}`} variant="link" fontSize="sm">
                {`${name}${i != groups.length-1 ? "," : ""}`}
              </Button>
            ))}
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default TopicTaskCard;
