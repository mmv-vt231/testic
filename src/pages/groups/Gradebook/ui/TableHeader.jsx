import React from "react";
import { Link } from "react-router-dom";

import { HStack, Thead, Tr, Th, Text, Badge, Button } from "@chakra-ui/react";

function TableHeader({ tasks, studentsCount, tasksCount }) {
  return (
    <Thead>
      <Tr>
        <Th>
          <HStack>
            <Text fontWeight="bold">Учнів</Text>
            <Badge size="sm">{studentsCount}</Badge>
          </HStack>
          <HStack>
            <Text fontWeight="bold">Тестувань</Text>
            <Badge size="sm">{tasksCount}</Badge>
          </HStack>
        </Th>
        {tasks.map(({ id, title }) => (
          <Th key={id}>
            <Button
              minW={0}
              color="gray.400"
              fontWeight="normal"
              noOfLines={1}
              as={Link}
              to={`/panel/tasks/${id}`}
              variant="link"
            >
              {title}
            </Button>
          </Th>
        ))}
        {tasks.length < 10 && [...Array(10 - tasks.length)].map((_, i) => <Th key={i}></Th>)}
      </Tr>
    </Thead>
  );
}

export default TableHeader;
