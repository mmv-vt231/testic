import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

import logo from "@/assets/images/logo/logo.svg";
import img from "@/assets/images/photos/intro.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Flex
      h="full"
      align="center"
      justify="center"
      bg="url('/src/assets/images/photos/shape-top.svg') no-repeat top right, url('/src/assets/images/photos/shape-bottom.svg') no-repeat bottom left"
      backgroundSize="30%"
    >
      <Box pos="fixed" top={0} w="full">
        <Container maxW="container.xl" p={5}>
          <Image w={200} src={logo} alt="Testic" />
        </Container>
      </Box>
      <Container maxW="container.xl">
        <Flex flexDirection={{ base: "column-reverse", md: "row" }} align="center">
          <Flex align="center" flex="1 1 50%">
            <VStack
              align={{ base: "center", md: "start" }}
              textAlign={{ base: "center", md: "start" }}
              maxW={500}
              spacing={5}
            >
              <Heading size="2xl">Перевірте знання своїх учнів</Heading>
              <Text>
                Дізнайтесь який матеріал вони засвоїли, провівши онлайн тестування на платформі{" "}
                <Box as="span" color="primary.500" fontWeight="bold">
                  Testic
                </Box>
              </Text>
              <HStack spacing={5}>
                <Button as={Link} to="/auth/login" size="lg">
                  Вхід
                </Button>
                <Button as={Link} to="/auth/register" variant="outline" size="lg">
                  Реєстрація
                </Button>
              </HStack>
            </VStack>
          </Flex>
          <Box flex="1 1 50%">
            <Image w={{ base: 300, md: "auto" }} src={img} alt="Картинка" />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Home;
