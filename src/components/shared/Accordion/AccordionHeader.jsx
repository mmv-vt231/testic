import React from "react";
import { HStack } from "@chakra-ui/react";

import { ArrowDown } from "@icons";
import RoundedIcon from "@components/shared/Icons/RoundedIcon";

function AccordionHeader({ Title, setOpen, open }) {
  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  const rotate = open && { transform: "rotateX(180deg)" };

  return (
    <HStack
      p={5}
      align="center"
      justifyContent="space-between"
      bg="white"
      rounded="md"
      cursor="pointer"
      boxShadow="0 0 10px 0 rgba(1,1,1,.05)"
      onClick={handleToggle}
      gap={4}
    >
      <Title />
      <RoundedIcon
        Icon={ArrowDown}
        icon={{ boxSize: 8, transition: "transform 0.3s", ...rotate }}
      />
    </HStack>
  );
}

export default AccordionHeader;
