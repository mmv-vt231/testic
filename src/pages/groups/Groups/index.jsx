import { Box, Button } from "@chakra-ui/react";
import { useGetGroupsQuery } from "@store/services/api";

import Header from "@components/layout/Header";
import GroupsList from "./ui/GroupsList";
import GroupsCreateModal from "./ui/GroupsCreateModal";

function Groups() {
  const { data, isLoading } = useGetGroupsQuery();

  return (
    <Box>
      <Header title="Групи">
        <GroupsCreateModal>
          <Button>+ Додати групу</Button>
        </GroupsCreateModal>
      </Header>
      <GroupsList data={data} isLoading={isLoading} />
    </Box>
  );
}

export default Groups;
