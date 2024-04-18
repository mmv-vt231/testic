import { SimpleGrid, Box } from "@chakra-ui/react";
import TopicTestCard from "@pages/topics/Topic/ui/TopicTestCard";
import TopicsCreateTestBtn from "./TopicsCreateTestBtn";

function TopicsTopicBody({ id, data }) {
  return (
    <Box
      overflow="hidden"
      bg="blue.50"
      borderBottomRadius="md"
      border="2px solid"
      borderColor="primary.300"
    >
      <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4} mt={4} px={4} pb={4}>
        <TopicsCreateTestBtn id={id} />
        {data.map(test => (
          <TopicTestCard key={test.id} data={test} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default TopicsTopicBody;
