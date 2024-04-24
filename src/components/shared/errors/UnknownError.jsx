import React from "react";
import { Flex, Box, Heading, Text, Image, AbsoluteCenter } from "@chakra-ui/react";

import unknownError from "@assets/images/photos/500.svg";

function UnknownError() {
  return (
    <AbsoluteCenter
      as={Flex}
      direction={{ base: "column-reverse", md: "initial" }}
      align="center"
      justify="center"
      w="full"
    >
      <Box flex={{ base: "1 1 auto", md: "0 1 400px" }} textAlign={{ base: "center", md: "start" }}>
        <Heading>Уупс...</Heading>
        <Text mt={5}>Щось пішло не так!</Text>
      </Box>
      <Image maxW={400} w="full" src={unknownError} alt="Щось пішло не так" />
    </AbsoluteCenter>
  );
}

export default UnknownError;
