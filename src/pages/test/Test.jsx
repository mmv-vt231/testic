import { useParams } from "react-router-dom";
import { useGetTestQuery } from "@store/services/api";

import TestHeader from "./ui/TestHeader";
import { Box, Spinner } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";

function Test() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTestQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  console.log(data);

  const { title } = data;

  return (
    <Box>
      <TestHeader title={title} />
    </Box>
  );
}

export default Test;
