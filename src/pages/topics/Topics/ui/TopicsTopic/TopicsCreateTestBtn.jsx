import { Button } from "@chakra-ui/react";
import TopicModalCreateTest from "@pages/topics/Topic/ui/TopicModalCreateTest";

function TopicsCreateTestBtn({ id }) {
  return (
    <TopicModalCreateTest title="Новий тест" topicId={id} type="create">
      <Button minH={180} fontSize="5xl" fontWeight="normal">
        +
      </Button>
    </TopicModalCreateTest>
  );
}

export default TopicsCreateTestBtn;
