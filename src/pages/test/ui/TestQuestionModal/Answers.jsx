import { Flex, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";

import panels from "./Panels";

function Answers() {
  return (
    <Tabs w="full" mt={5} variant="unstyled">
      <Flex justify="space-between" align="center">
        <Heading fontSize="xl" color="primary.500">
          Відповіді
        </Heading>
        <TabList gap={2}>
          {panels.map(({ title, Icon }, i) => (
            <Tab
              key={i}
              as={Button}
              variant="ghost"
              size="small"
              title={title}
              _selected={{ bg: "primary.500", fill: "white" }}
            >
              <Icon boxSize={5} />
            </Tab>
          ))}
        </TabList>
      </Flex>

      <TabPanels>
        {panels.map(({ Panel }, i) => (
          <TabPanel key={i} mt={5} p={0}>
            <Panel />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default Answers;
