import React from "react";
import { AbsoluteCenter, Text } from "@chakra-ui/react";

function Message({ text }) {
  return (
    <AbsoluteCenter>
      <Text textAlign="center" color="gray.400">{text}</Text>
    </AbsoluteCenter>
  );
}

export default Message;
