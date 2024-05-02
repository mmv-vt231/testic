import React from "react";
import { API_HOST } from "@config/constants";

import { Image, Button, HStack, Text, Badge, Box } from "@chakra-ui/react";
import AlertDialog from "@components/shared/AlertDialog";
import { Edit, Delete, Single, Multiple, Relation, Order } from "@icons";
import TestQuestionActionModal from "../TestQuestionModal/TestQuestionActionModal";

const types = {
  single: {
    title: "Одна відповідь",
    Icon: Single,
  },
  multiple: {
    title: "Декілька відповідей",
    Icon: Multiple,
  },
  relation: {
    title: "Відповідність",
    Icon: Relation,
  },
  order: {
    title: "Порядок",
    Icon: Order,
  },
};

function TestQuestionItemHeader({ data }) {
  const { image, points, type } = data;
  const { Icon, title } = types[type];

  const handleDelete = () => {
    console.log("Delete Question");
  };

  return (
    <Box>
      <HStack gap={4} justify="space-between">
        <HStack gap={2}>
          <Icon boxSize={6} fill="primary.500" /> <Text>{title}</Text>
        </HStack>
        <HStack spacing={2} ml="auto">
          <TestQuestionActionModal title="Редагування питання" data={data} type="edit">
            <Button size="small">
              <Edit boxSize={5} />
            </Button>
          </TestQuestionActionModal>
          <AlertDialog
            title="Видилити питання"
            description="Ви справді бажаєте видалити це питання?"
            onСonfirm={handleDelete}
          >
            <Button colorScheme="red" size="small">
              <Delete boxSize={5} />
            </Button>
          </AlertDialog>
        </HStack>
      </HStack>

      <HStack spacing={2} mt={4}>
        {image && <Image maxH={100} maxW={100} objectFit="contain" src={`${API_HOST}/${image}`} />}
        <HStack>
          <Text fontWeight="bold">Бали:</Text>
          <Badge>{points}</Badge>
        </HStack>
      </HStack>
    </Box>
  );
}

export default TestQuestionItemHeader;
