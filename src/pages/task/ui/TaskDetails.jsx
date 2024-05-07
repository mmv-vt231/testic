import React from "react";

import { Card, CardBody, Stack } from "@chakra-ui/react";
import TaskDetailsCards from "./TaskDetailsCards";
import TaskDetailsInfo from "./TaskDetailsInfo";

function TaskDetails({ data }) {
  return (
    <Card>
      <CardBody as={Stack} spacing={0}>
        <TaskDetailsInfo data={data} />
        <TaskDetailsCards />
      </CardBody>
    </Card>
  );
}

export default TaskDetails;
