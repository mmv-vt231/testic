import { useState } from "react";

import { Box } from "@chakra-ui/react";
import TopicsTopicHeader from "./TopicsTopicHeader";
import TopicsTopicBody from "./TopicsTopicBody";

function TopicsTopic({ data }) {
  const { id, title, tests } = data;
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <TopicsTopicHeader id={id} title={title} setOpen={setOpen} open={open} />
      {open && <TopicsTopicBody id={id} open={open} data={tests} />}
    </Box>
  );
}

export default TopicsTopic;
