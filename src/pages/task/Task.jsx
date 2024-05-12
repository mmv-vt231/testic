import React from "react";
import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "@store/services/api";

import { Box, Spinner } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import TaskHeader from "./ui/TaskHeader";
import TaskDetails from "./ui/TaskDetails";

function Task() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTaskQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  return (
    <Box>
      <TaskHeader id={id} data={data} />
      <TaskDetails data={data} />
    </Box>
  );
}

export default Task;
