import React from "react";

import { Card, CardBody, CardHeader, HStack, Text } from "@chakra-ui/react";
import ProgressCircle from "./ProgressCircle";
import Cards from "./Cards";

function ResultDetails({ data }) {
  const { title, fullName, group, details } = data;

  return (
    <Card>
      <CardHeader>
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Text>
          {fullName}, {group}
        </Text>
      </CardHeader>
      <CardBody pt={0}>
        <HStack spacing={12} align="start" flexWrap="wrap">
          <ProgressCircle percent={details.percent} />
          <Cards data={details} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default ResultDetails;
