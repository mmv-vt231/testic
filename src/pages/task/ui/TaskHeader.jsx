import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTaskMutation } from "@store/services/api";

import { Box, Heading, Button, HStack } from "@chakra-ui/react";
import { Edit } from "@icons";
import AlertDialog from "@components/shared/AlertDialog";
import Header from "@components/layout/Header";
import Copy from "@components/shared/Button/Copy";
import TopicTaskModalAction from "@pages/topics/TopicTests/ui/TopicTaskModalAction";

function TaskHeader({ data, id }) {
  const navigate = useNavigate();
  const [deleteTask] = useDeleteTaskMutation();

  const modalData = {
    start: data.start,
    end: data.end,
    groups: data.groups,
    duration: data.duration,
    oneChance: data.oneChance,
    shuffleQuestions: data.shuffleQuestions,
    showAnswers: data.showAnswers,
  };

  const handleDeleteTask = async () => {
    await deleteTask(id);
    navigate("/panel/topics");
  };

  const Title = () => (
    <Box>
      <HStack>
        <Heading>Тестування</Heading>
        <Copy text={`${location.origin}/test/start/${id}`} />
      </HStack>
    </Box>
  );

  return (
    <Header Title={Title} data={modalData}>
      <TopicTaskModalAction data={modalData} title="Редагування тестування" type="edit">
        <Button size="small">
          <Edit boxSize={5} />
        </Button>
      </TopicTaskModalAction>
      <AlertDialog
        title="Видилити тестування"
        description="Ви справді бажаєте видалити це тестування?"
        onСonfirm={handleDeleteTask}
      >
        <Button colorScheme="red">Видалити</Button>
      </AlertDialog>
    </Header>
  );
}

export default TaskHeader;
