import { Flex, Box, Heading, Text, Image, AbsoluteCenter } from "@chakra-ui/react";

import notFound from "@assets/images/photos/404.svg";
import Logo from "@components/shared/Logo";

function NotFound() {
  return (
    <>
      <Flex pos="fixed" w="full" top={0} justify="center" p={5}>
        <Logo />
      </Flex>
      <AbsoluteCenter
        as={Flex}
        direction={{ base: "column-reverse", md: "initial" }}
        align="center"
        justify="center"
        w="full"
      >
        <Box
          flex={{ base: "1 1 auto", md: "0 1 400px" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Heading>Увага!</Heading>
          <Text mt={5}>Сторінка на яку ви перейшли не існує!</Text>
        </Box>
        <Image maxW={400} w="full" src={notFound} alt="Сторінку не знайдено" />
      </AbsoluteCenter>
    </>
  );
}

export default NotFound;
