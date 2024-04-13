import { useNavigate, useParams } from "react-router-dom";
import { useDeleteGroupMutation } from "@store/services/api";

import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { Edit } from "@icons";
import Header from "@components/layout/Header";
import AlertDialog from "@components/shared/AlertDialog";
import GroupStudentActionModal from "./GroupStudentActionModal";
import GroupEditModal from "./GroupEditModal";

function GroupHeader({ name, studentsCount }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteGroup] = useDeleteGroupMutation();

  const handleDeleteGroup = async () => {
    await deleteGroup(id);
    navigate("/panel/groups");
  };

  const Title = () => (
    <Box>
      <Flex align="center">
        <Heading>{name}</Heading>
        <GroupEditModal name={name}>
          <Edit
            fill="gray.400"
            ml={2}
            boxSize={6}
            cursor="pointer"
            _hover={{ fill: "primary.500" }}
          />
        </GroupEditModal>
      </Flex>
      <Text color="gray.400">Учнів: {studentsCount}</Text>
    </Box>
  );

  return (
    <Header Title={Title}>
      <GroupStudentActionModal title="Новий учень" type="create">
        <Button>+ Додати учня</Button>
      </GroupStudentActionModal>
      <AlertDialog
        title="Видилити групу"
        description="Ви справді бажаєте видалити цю групу?"
        onСonfirm={handleDeleteGroup}
      >
        <Button colorScheme="red">Видалити групу</Button>
      </AlertDialog>
    </Header>
  );
}

export default GroupHeader;
