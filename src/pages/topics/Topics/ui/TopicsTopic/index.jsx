import React from "react";

import { Link } from "react-router-dom";
import { SimpleGrid, Button } from "@chakra-ui/react";
import Accordion from "@components/shared/Accordion";
import TopicTestCard from "@pages/topics/TopicTests/ui/TopicTestCard";
import TopicsCreateTestBtn from "./TopicsCreateTestBtn";

function TopicsTopic({ data }) {
  const { id, title, tests } = data;

  const Title = () => (
    <Button as={Link} to={id} variant="link" fontSize="2xl">
      {title}
    </Button>
  );

  return (
    <Accordion Title={Title}>
      <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4}>
        <TopicsCreateTestBtn id={id} />
        {tests.map(test => (
          <TopicTestCard key={test.id} data={test} />
        ))}
      </SimpleGrid>
    </Accordion>
  );
}

export default TopicsTopic;
