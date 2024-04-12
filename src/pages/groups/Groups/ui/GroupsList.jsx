import { SimpleGrid, Spinner } from "@chakra-ui/react";

import GroupsListCard from "./GroupsListCard";

function GroupsList({ data, isLoading }) {
  if (isLoading) return <Spinner />;

  const groups = data.map(group => <GroupsListCard key={group.id} data={group} />);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4}>
      {data && groups}
    </SimpleGrid>
  );
}

export default GroupsList;
