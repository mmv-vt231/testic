import React from "react";

import { Tbody, Tr, Td } from "@chakra-ui/react";

function TableBody({ students, tasks }) {
  return (
    <Tbody>
      {students.map(({ id, fullName, results }) => (
        <Tr key={id}>
          <Td>{fullName}</Td>
          {tasks.map(({ id }, i) => {
            const score = results.find(el => el.taskId == id)?.score || "-";

            return <Td key={i}>{score}</Td>;
          })}
          {tasks.length < 10 && [...Array(10 - tasks.length)].map((_, i) => <Td key={i}></Td>)}
        </Tr>
      ))}
      {students.length < 10 &&
        [...Array(10 - students.length)].map((_, i) => (
          <Tr key={i}>
            {[...Array(11)].map((_, i) => (
              <Td key={i}></Td>
            ))}
          </Tr>
        ))}
    </Tbody>
  );
}

export default TableBody;
