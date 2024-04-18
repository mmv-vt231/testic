import { useNavigate, useParams } from "react-router-dom";
import { useDeleteTopicMutation } from "@store/services/api";

import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Edit } from "@icons";
import Header from "@components/layout/Header";
import AlertDialog from "@components/shared/AlertDialog";
import TopicEditModal from "./TopicEditModal";
import TopicModalCreateTest from "./TopicModalCreateTest";

function TopicHeader({ title }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deleteTopic] = useDeleteTopicMutation();

  const handleDeleteTopic = async () => {
    await deleteTopic(id);
    navigate("../");
  };

  const Title = () => (
    <Box>
      <Flex align="center">
        <Heading>{title}</Heading>
        <TopicEditModal title={title}>
          <Edit
            fill="gray.400"
            ml={2}
            boxSize={6}
            cursor="pointer"
            _hover={{ fill: "primary.500" }}
          />
        </TopicEditModal>
      </Flex>
    </Box>
  );

  return (
    <Header Title={Title}>
      <TopicModalCreateTest title="Новий тест" topicId={id} type="create">
        <Button>+ Додати тест</Button>
      </TopicModalCreateTest>
      <AlertDialog
        title="Видилити тему"
        description="Ви справді бажаєте видалити цю тему?"
        onСonfirm={handleDeleteTopic}
      >
        <Button colorScheme="red">Видалити тему</Button>
      </AlertDialog>
    </Header>
  );
}

export default TopicHeader;
