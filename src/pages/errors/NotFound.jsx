import { Flex } from "@chakra-ui/react";
import Logo from "@components/shared/Logo";
import NotFound from "@components/shared/errors/NotFound";

function NotFoundPage() {
  return (
    <>
      <Flex pos="absolute" w="full" top={0} justify="center" p={5}>
        <Logo />
      </Flex>
      <NotFound />
    </>
  );
}

export default NotFoundPage;
