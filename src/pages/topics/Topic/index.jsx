import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useGetTopicQuery } from "@store/services/api";

import { Box, Spinner } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import TopicHeader from "./ui/TopicHeader";
import TopicTabs from "./ui/TopicTabs";

function Topic() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTopicQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  const { title } = data;

  return (
    <Box>
      <TopicHeader title={title} />
      <TopicTabs id={id} />
      <Outlet />
    </Box>
  );
}

export default Topic;
