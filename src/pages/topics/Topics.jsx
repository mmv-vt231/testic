import { Box, Button, Stack } from "@chakra-ui/react";
import Header from "@components/layout/Header";
import TopicsModalCreate from "./ui/TopicsModalCreate";
import TopicsTopic from "./ui/TopicsTopic";

import { useGetTopicsQuery } from "@store/services/api";

function Topics() {
  const { data, isLoading } = useGetTopicsQuery();

  if (isLoading) return null;

  return (
    <Box>
      <Header title="Теми">
        <TopicsModalCreate>
          <Button>+ Додати групу</Button>
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
