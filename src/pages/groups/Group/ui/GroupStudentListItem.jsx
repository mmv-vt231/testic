import React from "react";
import { useDeleteStudentMutation } from "@store/services/api";

import { Tr, Td, Button, HStack } from "@chakra-ui/react";
import { Edit, Delete } from "@icons";
import GroupStudentActionModal from "./GroupStudentActionModal";
import AlertDialog from "@components/shared/AlertDialog";

function GroupStudentListItem({ data }) {
  const { id, fullName, email } = data;
  const [deleteStudent] = useDeleteStudentMutation();

  const handleDelete = async () => {
    await deleteStudent(id);
  };

  return (
    <Tr>
      <Td>{fullName}</Td>
      <Td>{email}</Td>
      <Td>
        <HStack spacing={2}>
          <GroupStudentActionModal title="Редагування учня" data={data} type="edit">
            <Button size="small">
              <Edit boxSize={5} />
            </Button>
          </GroupStudentActionModal>
          <AlertDialog
            title="Видилити учня"
            description="Ви справді бажаєте видалити цього учня?"
            onСonfirm={handleDelete}
          >
            <Button colorScheme="red" size="small">
              <Delete boxSize={5} />
            </Button>
          </AlertDialog>
        </HStack>
      </Td>
    </Tr>
  );
}

export default GroupStudentListItem;
