import React from "react";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import GroupStudentListItem from "./GroupStudentListItem";

function GroupStudentList({ students }) {
  return (
    <TableContainer>
      <Table variant="custom" size="lg">
        <Thead>
          <Tr>
            <Th>Учень</Th>
            <Th>Пошта</Th>
            <Th>Інше</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.length ? (
            students.map(student => <GroupStudentListItem key={student.id} data={student} />)
          ) : (
            <Tr backgroundColor="transparent !important" boxShadow="none !important">
              <Td p={8}>
                <Text color="gray.400" fontWeight="normal">
                  Студенти відсутні
                </Text>
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default GroupStudentList;
