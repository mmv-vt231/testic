import React from "react";
import { useParams } from "react-router-dom";
import { useGetGroupResultsQuery } from "@store/services/api";

import { Box, Card, CardBody, HStack, Table, Spinner } from "@chakra-ui/react";
import Header from "@components/layout/Header";
import NotFound from "@components/shared/errors/NotFound";
import TableHeader from "./ui/TableHeader";
import TableBody from "./ui/TableBody";

function Gradebook() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetGroupResultsQuery(id);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;

  const { name, students, tasks, studentsCount, tasksCount } = data;

  return (
    <Box>
      <Header title={`Журнал ${name}`} />
      <HStack>
        <Card>
          <CardBody overflowX="auto">
            <Table variant="gradebook">
              <TableHeader tasks={tasks} studentsCount={studentsCount} tasksCount={tasksCount} />
              <TableBody students={students} tasks={tasks} />
            </Table>
          </CardBody>
        </Card>
      </HStack>
    </Box>
  );
}

export default Gradebook;
