import React from "react";
import isEmpty from "@utils/isEmpty";

import { useContext, useState } from "react";
import { FormContext } from "@components/shared/form/Form";
import NumberField from "@components/shared/form/NumberField";

import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
} from "@chakra-ui/react";
import panels from "./Panels";

function Answers() {
  const [tabIndex, setTabIndex] = useState(0);
  const { setData, errors, setErrors } = useContext(FormContext);

  const error = !isEmpty(errors) && errors.keys;

  const handleChangeTab = (index, type) => {
    setData(data => ({ ...data, type, answers: [], keys: [] }));
    setErrors({});
    setTabIndex(index);
  };

  return (
    <Tabs w="full" mt={5} index={tabIndex} variant="unstyled">
      <Flex justify="space-between" align="center">
        <Heading fontSize="xl" color="primary.500">
          Відповіді
        </Heading>
        <TabList gap={2}>
          {panels.map(({ title, type, Icon }, i) => (
            <Tab
              key={i}
              as={Button}
              variant="ghost"
              size="small"
              title={title}
              onClick={() => handleChangeTab(i, type)}
              _selected={{ bg: "primary.500", fill: "white" }}
            >
              <Icon boxSize={5} />
            </Tab>
          ))}
        </TabList>
      </Flex>

      {error && (
        <Box color="red.500" fontSize="sm">
          {error}
        </Box>
      )}

      <TabPanels minH={140}>
        {panels.map(({ Panel }, i) => (
          <TabPanel key={i} mt={5} p={0}>
            {tabIndex == i && <Panel />}
          </TabPanel>
        ))}
      </TabPanels>
      <NumberField
        name="points"
        label="Бали"
        sx={{ label: { textAlign: "center", mb: 0 } }}
        maxW={85}
        ml="auto"
        mt={4}
      />
    </Tabs>
  );
}

export default Answers;
