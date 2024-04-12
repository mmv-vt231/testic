import { useParams } from "react-router-dom";
import { useGetGroupQuery } from "@store/services/api";

import { Box, Spinner } from "@chakra-ui/react";
import NotFound from "@components/shared/errors/NotFound";
import GroupHeader from "./ui/GroupHeader";
import GroupStudentList from "./ui/GroupStudentList";

function Group() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetGroupQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  const { name, students } = data;

  return (
    <Box>
      <GroupHeader name={name} studentsCount={students.length} />
      <GroupStudentList students={students} />
    </Box>
  );
}

export default Group;
