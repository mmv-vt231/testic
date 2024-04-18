import { useParams } from "react-router-dom";
import { useGetTopicQuery } from "@store/services/api";

import { Box, Spinner } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import TopicHeader from "./ui/TopicHeader";
import TopicList from "./ui/TopicList";
import TopicTabs from "./ui/TopicTabs";

function Topic() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTopicQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  const { title, tests } = data;

  return (
    <Box>
      <TopicHeader title={title} />
      <TopicTabs id={id} />
      <TopicList data={tests} />
    </Box>
  );
}

export default Topic;
