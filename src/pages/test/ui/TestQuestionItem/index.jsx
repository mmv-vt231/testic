import React from "react";

import { Heading, Divider, Box } from "@chakra-ui/react";
import Accordion from "@components/shared/Accordion";
import TestQuestionItemHeader from "./TestQuestionItemHeader";
import SingleOrMultiple from "./SingleOrMultiple";
import Order from "./Order";
import Relation from "./Relation";

function TestQuestionItem({ data }) {
  const { title, type, data: answersData, keys } = data;

  const Title = () => <Heading fontSize="2xl">{title}</Heading>;

  return (
    <Accordion Title={Title}>
      <Box bg="white" p={4} rounded="md">
        <TestQuestionItemHeader data={data} />
        <Divider colorScheme="red" my={4} borderBottomWidth={2} borderColor="gray.300" />
        {(type == "single" || type == "multiple") && (
          <SingleOrMultiple data={answersData} keys={keys} type={type} />
        )}
        {type == "relation" && <Relation data={answersData} keys={keys} />}
        {type == "order" && <Order data={answersData} />}
      </Box>
    </Accordion>
  );
}

export default TestQuestionItem;
