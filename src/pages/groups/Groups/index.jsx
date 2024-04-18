import { Box, Button, Spinner } from "@chakra-ui/react";
import { useGetGroupsQuery } from "@store/services/api";

import Header from "@components/layout/Header";
import UnknownError from "@components/shared/errors/UnknownError";
import GroupsList from "./ui/GroupsList";
import GroupsCreateModal from "./ui/GroupsCreateModal";

function Groups() {
  const { data, isLoading, isError } = useGetGroupsQuery();

  if (isLoading) return <Spinner />;
  if (isError) return <UnknownError />;

  return (
    <Box>
      <Header title="Групи">
        <GroupsCreateModal>
          <Button>+ Додати групу</Button>
        </GroupsCreateModal>
      </Header>
      <GroupsList data={data} />
    </Box>
  );
}

export default Groups;
