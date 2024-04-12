import { TableContainer, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
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
          {students.map(student => (
            <GroupStudentListItem key={student.id} data={student} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default GroupStudentList;
