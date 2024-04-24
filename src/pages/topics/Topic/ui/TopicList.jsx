import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import TopicTestCard from "./TopicTestCard";
import Message from "@components/shared/Message";

function TopicList({ data }) {
  return (
    <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4}>
      {!!data.length ? (
        data.map(test => <TopicTestCard key={test.id} data={test} />)
      ) : (
        <Message text="На жаль, тут поки що немає жодного тесту" />
      )}
    </SimpleGrid>
  );
}

export default TopicList;
