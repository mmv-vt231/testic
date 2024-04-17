import { Link } from "react-router-dom";
import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";

import RoundedIcon from "@components/shared/Icons/RoundedIcon";
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
          <RoundedIcon Icon={Person} icon={{ boxSize: 7 }} />
          <Text ml={6} fontSize="2xl" fontWeight="bold">
            {studentsCount}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default GroupListCard;
