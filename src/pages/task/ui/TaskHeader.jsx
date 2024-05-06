import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTaskMutation } from "@store/services/api";

import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Edit } from "@icons";
import AlertDialog from "@components/shared/AlertDialog";
import Header from "@components/layout/Header";
import TopicTaskModalAction from "@pages/topics/TopicTests/ui/TopicTaskModalAction"

function TaskHeader({ data, id }) {
    const navigate = useNavigate();
    const [deleteTask] = useDeleteTaskMutation();

    const modalData = {
        start: data.start,
        end: data.end,
        groups: data.groups,
        duration: data.duration,
        oneChance: data.oneChance,
        shuffle: data.shuffle,
        showAnswers: data.showAnswers
    }
  
    const handleDeleteTask = async () => {
      await deleteTask(id);
      navigate("/panel/topics");
    }
  
    const Title = () => (
      <Box>
        <Flex align="center">
          <Heading>{data.title}</Heading>
          <TopicTaskModalAction data={modalData} title="Редагування тестування" type="edit">
            <Edit
              fill="gray.400"
              ml={2}
              boxSize={6}
              cursor="pointer"
              _hover={{ fill: "primary.500" }}
            />
          </TopicTaskModalAction>
        </Flex>
      </Box>
    );

    return (
        <Header Title={Title} data={modalData}>
            <AlertDialog
            title="Видилити тестування"
            description="Ви справді бажаєте видалити це тестування?"
            onСonfirm={handleDeleteTask}
            >
            <Button colorScheme="red">Видалити тестування</Button>
            </AlertDialog>
        </Header>
  )
}

export default TaskHeader