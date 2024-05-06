import React from "react";
import { useParams } from "react-router-dom";
import { useGetTaskQuery } from "@store/services/api";

import { Box, Spinner } from "@chakra-ui/react";
import UnknownError from "@components/shared/errors/UnknownError"
import TaskHeader from "./ui/TaskHeader";

function Task() {
  const { id } = useParams(); 
  const { data, isLoading, isError } = useGetTaskQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <UnknownError />;

  console.log(data);

  return (
    <Box>
      <TaskHeader data={data} />
    </Box>
  )
}

export default Task;