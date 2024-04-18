import { ButtonGroup } from "@chakra-ui/react";
import TopicTabsButton from "./TopicTabsButton";

function TopicTabs({ id }) {
  return (
    <ButtonGroup spacing={0} mb={5}>
      <TopicTabsButton path={`/panel/topics/${id}`}>Усі</TopicTabsButton>
      <TopicTabsButton path={`/panel/topics/${id}/planned`}>Заплановані</TopicTabsButton>
    </ButtonGroup>
  );
}

export default TopicTabs;
