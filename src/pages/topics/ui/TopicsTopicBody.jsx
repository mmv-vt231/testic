import { SimpleGrid, Flex, Box } from "@chakra-ui/react";
import TopicsTopicCard from "./TopicsTopicCard";

function TopicsTopicBody({ open }) {
  const styles = open ? { h: "auto" } : { h: 0 };

  return (
    <Box {...styles} overflow="hidden" transition="all 0.5s">
      <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4} mt={4}>
        <TopicsTopicCard />
        <TopicsTopicCard />
        <TopicsTopicCard />
      </SimpleGrid>
    </Box>
  );
}

export default TopicsTopicBody;
