import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import GroupsListCard from "./GroupsListCard";
import Message from "@components/shared/Message";

function GroupsList({ data }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4}>
      {!!data.length ? (
        data.map(group => <GroupsListCard key={group.id} data={group} />)
      ) : (
        <Message text="На жаль, тут поки що немає жодної групи" />
      )}
    </SimpleGrid>
  );
}

export default GroupsList;
