import { useGetTopicsQuery } from "@store/services/api";

import { Box, Button, Spinner, Stack } from "@chakra-ui/react";
import Header from "@components/layout/Header";
import UnknownError from "@components/shared/errors/UnknownError";
import TopicsModalCreate from "./ui/TopicsModalCreate";
import TopicsTopic from "./ui/TopicsTopic";

function Topics() {
  const { data, isLoading, isError } = useGetTopicsQuery();

  if (isLoading) return <Spinner />;
  if (isError) return <UnknownError />;

  return (
    <Box>
      <Header title="Теми">
        <TopicsModalCreate>
          <Button>+ Додати тему</Button>
        </TopicsModalCreate>
      </Header>
      <Stack spacing={4}>
        {data.map(topic => (
          <TopicsTopic key={topic.id} data={topic} />
        ))}
      </Stack>
    </Box>
  );
}

export default Topics;
