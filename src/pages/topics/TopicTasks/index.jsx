import React from "react";
import { useParams } from "react-router-dom";
import { useGetTasksQuery } from "@store/services/api";

import { SimpleGrid, Spinner } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import Message from "@components/shared/Message";
import TopicTaskCard from "./ui/TopicTaskCard";

function TopicTasks() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTasksQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  return (
    <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4}>
      {!!data.length ? (
        data.map(test => <TopicTaskCard key={test.id} data={test} />)
      ) : (
        <Message text="На жаль, тут поки що немає жодного тестування" />
      )}
    </SimpleGrid>
  );
}

export default TopicTasks;
