import React from "react";
import { Center } from "@chakra-ui/react";

function RoundedIcon({ Icon, box, icon, color }) {
  return (
    <Center
      pos="relative"
      w={12}
      h={12}
      borderRadius="full"
      backgroundColor={color ? `${color}.100` : `primary.10`}
      pointerEvents="none"
      {...box}
    >
      <Icon fill={color ? `${color}.400` : `primary.500`} zIndex="1" {...icon} />
    </Center>
  );
}

export default RoundedIcon;
