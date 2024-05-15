import React from "react";
import {
  Stack,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";
import TaskResultsItem from "./TaskResultsItem";

const columns = [
  "Учень",
  "Оцінка",
  "Правильно",
  "Частково",
  "Неправильно",
  "Витрачено часу",
  "Дата проходження",
  "Інше",
];

function TaskResults({ results = [], resultsCount }) {
  return (
    <Stack mt={5} spacing={6}>
      <Heading fontSize="2xl">Результати ({resultsCount})</Heading>
      <TableContainer>
        <Table variant="custom">
          <Thead>
            <Tr>
              {columns.map((value, i) => (
                <Th key={i}>{value}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {results.length ? (
              results.map(result => <TaskResultsItem key={result.id} data={result} />)
            ) : (
              <Tr backgroundColor="transparent !important" boxShadow="none !important">
                <Td p={8}>
                  <Text color="gray.400" fontWeight="normal">
                    Результати відсутні
                  </Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default TaskResults;
