import { Link } from "react-router-dom";
import { Button, Card, CardBody, Center, Flex, Text } from "@chakra-ui/react";

import { Person } from "@components/shared/Icons";

function GroupListCard({ data }) {
  const { id, name, studentsCount } = data;

  return (
    <Card>
      <CardBody as={Flex} justify="space-between" alignItems="center" gap={4}>
        <Button as={Link} to={id} variant="link" fontSize="2xl" fontWeight="bold" noOfLines={1}>
          {name}
        </Button>
        <Flex alignItems="center">
          <Center
            pos="relative"
            _after={{
              content: `""`,
              position: "absolute",
              w: 12,
              h: 12,
              backgroundColor: "primary.10",
              borderRadius: "full",
            }}
          >
            <Person boxSize={7} fill="primary.500" zIndex="1" />
          </Center>
          <Text ml={6} fontSize="2xl" fontWeight="bold">
            {studentsCount}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default GroupListCard;
