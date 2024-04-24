import React from "react";
import { Center } from "@chakra-ui/react";

function RoundedIcon({ Icon, box, icon }) {
  return (
    <Center
      pos="relative"
      _after={{
        content: `""`,
        position: "absolute",
        w: 12,
        h: 12,
        backgroundColor: "primary.10",
        borderRadius: "full",
        pointerEvents: "none",
      }}
      {...box}
    >
      <Icon fill="primary.500" zIndex="1" {...icon} />
    </Center>
  );
}

export default RoundedIcon;
