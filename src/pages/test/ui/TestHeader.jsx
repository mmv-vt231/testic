import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteTestMutation } from "@store/services/api";

import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Edit } from "@icons";
import Header from "@components/layout/Header";
import AlertDialog from "@components/shared/AlertDialog";
import TestEditModal from "./TestEditModal";
import TestQuestionActionModal from "./TestQuestionModal/TestQuestionActionModal";

function TestHeader({ title }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteTest] = useDeleteTestMutation();

  const handleDeleteTest = async () => {
    await deleteTest(id);
    navigate("/panel/topics");
  };

  const Title = () => (
    <Box>
      <Flex align="center">
        <Heading>{title}</Heading>
        <TestEditModal title={title}>
          <Edit
            fill="gray.400"
            ml={2}
            boxSize={6}
            cursor="pointer"
            _hover={{ fill: "primary.500" }}
          />
        </TestEditModal>
      </Flex>
    </Box>
  );

  return (
    <Header Title={Title}>
      <TestQuestionActionModal title="Створити питання" type="create">
        <Button>+ Додати питання</Button>
      </TestQuestionActionModal>
      <AlertDialog
        title="Видилити тест"
        description="Ви справді бажаєте видалити цей тест?"
        onСonfirm={handleDeleteTest}
      >
        <Button colorScheme="red">Видалити тест</Button>
      </AlertDialog>
    </Header>
  );
}

export default TestHeader;
