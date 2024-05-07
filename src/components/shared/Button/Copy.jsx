import React, { useState } from "react";
import copy from "@utils/copy";

import {
  Button,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from "@chakra-ui/react";
import { Link as LinkIcon } from "@icons";

const Copy = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = async () => {
    await copy(text);
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <Popover placement="top" isOpen={isOpen} onOpen={handleCopy}>
      <PopoverTrigger>
        <Button size="small" variant="ghost" title="Копіювати посилання">
          <LinkIcon boxSize={6} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w="max-content" p={1} bg="primary.500">
        <PopoverArrow bg="primary.500" />
        <Text fontSize="sm" fontWeight="bold" color="white">
          Скопійовано
        </Text>
      </PopoverContent>
    </Popover>
  );
};
export default Copy;
