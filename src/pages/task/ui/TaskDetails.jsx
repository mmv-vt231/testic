import React from "react";

import { Card, CardBody, Stack } from "@chakra-ui/react";
import TaskDetailsCards from "./TaskDetailsCards";
import TaskDetailsInfo from "./TaskDetailsInfo";
import TaskResults from "./TaskResults";

function TaskDetails({ data }) {
  const { studentsCount, completedCount, uncompletedCount, averageScore, resultsCount, results } =
    data;

  return (
    <Stack>
      <Card>
        <CardBody as={Stack} spacing={0}>
          <TaskDetailsInfo data={data} />
          <TaskDetailsCards
            studentsCount={studentsCount}
            completedCount={completedCount}
            uncompletedCount={uncompletedCount}
            averageScore={averageScore}
          />
        </CardBody>
      </Card>
      <TaskResults resultsCount={resultsCount} results={results} />
    </Stack>
  );
}

export default TaskDetails;
