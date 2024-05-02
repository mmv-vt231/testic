import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "@components/shared/form/Form";

import NumberField from "@components/shared/form/NumberField";
import { Flex, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";
import panels from "./Panels";

function Answers() {
  const { data, setData, setErrors, setValidation } = useContext(FormContext);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const index = panels.findIndex(el => el.type == data.type);
    setValidation({ ...panels[index].validation });
    setTabIndex(index);
  }, []);

  const handleChangeTab = (index, type, validation, data) => {
    setData(prevData => ({ ...prevData, type, data, keys: [] }));
    setValidation(validation);
    setErrors({});
    setTabIndex(index);
  };

  return (
    <Tabs w="full" mt={2} index={tabIndex} variant="unstyled">
      <Flex align="center">
        {tabIndex != 2 && (
          <Heading fontSize="xl" color="primary.500">
            Відповіді
          </Heading>
        )}
        <TabList gap={2} ml="auto">
          {panels.map(({ title, type, Icon, validation, data }, i) => (
            <Tab
              key={i}
              as={Button}
              variant="ghost"
              size="small"
              title={title}
              onClick={() => handleChangeTab(i, type, validation, data)}
              _selected={{ bg: "primary.500", fill: "white" }}
            >
              <Icon boxSize={5} />
            </Tab>
          ))}
        </TabList>
      </Flex>

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
