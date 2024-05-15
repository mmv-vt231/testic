import React from "react";
import { useDeleteResultMutation } from "@store/services/api";
import dateFormatConverter from "@utils/dateFormatConverter";

import { Button, HStack, Tr, Td, Badge } from "@chakra-ui/react";
import AlertDialog from "@components/shared/AlertDialog";
import { Result, Delete } from "@icons";
import { Link } from "react-router-dom";

function TaskResultsItem({ data }) {
  const { id, fullName, correct, half, wrong, score, totalScore, duration, endDate, completed } =
    data;

  const [deleteResult] = useDeleteResultMutation();

  const end = completed ? dateFormatConverter(endDate, "full") : "Виконується";

  const handleDelete = async () => {
    await deleteResult(id);
  };

  return (
    <Tr>
      <Td>{fullName}</Td>
      <Td>
        <Badge colorScheme="orange" size="md" w="fit-content" px={2} variant="round">
          {score} / {totalScore}
        </Badge>
      </Td>
      <Td>
        <Badge colorScheme="green" size="md" variant="round">
          {correct}
        </Badge>
      </Td>
      <Td>
        <Badge colorScheme="orange" size="md" variant="round">
          {half}
        </Badge>
      </Td>
      <Td>
        <Badge colorScheme="red" size="md" variant="round">
          {wrong}
        </Badge>
      </Td>
      <Td>{duration}</Td>
      <Td>{end}</Td>
      <Td>
        <HStack spacing={2}>
          <Button as={Link} to={`/test/result/${id}`} size="small">
            <Result boxSize={5} />
          </Button>
          <AlertDialog
            title="Видилити проходження"
            description="Ви справді бажаєте видалити це проходження?"
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

export default TaskResultsItem;
