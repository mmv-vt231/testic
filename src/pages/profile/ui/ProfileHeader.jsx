import React from "react";
import dateFormatConverter from "@utils/dateFormatConverter";

import { Box, Card, CardBody, Heading, Text, Flex } from "@chakra-ui/react";

function ProfileHeader({ userData }) {
  const { name, surname, email, createdAt } = userData;
  const formattedDate = dateFormatConverter(createdAt);

  return (
    <Card>
      <CardBody>
        <Flex justifyContent="space-between" gap={2}>
          <Box>
            <Heading fontSize="2xl">
              {name} {surname}
            </Heading>
            <Text color="gray.400">{email}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Дата створення</Text>
            <Text textAlign="end">{formattedDate}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ProfileHeader;
