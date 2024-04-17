import { useState } from "react";

import { Box } from "@chakra-ui/react";
import TopicsTopicHeader from "./TopicsTopicHeader";
import TopicsTopicBody from "./TopicsTopicBody";

function TopicsTopic({ data }) {
  const { title } = data;
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <TopicsTopicHeader title={title} setOpen={setOpen} open={open} />
      <TopicsTopicBody open={open} />
    </Box>
  );
}

export default TopicsTopic;
