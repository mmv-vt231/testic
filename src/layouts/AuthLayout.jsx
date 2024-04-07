import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Flex, Image, Box } from "@chakra-ui/react";

import logo from "@/assets/images/logo/logo.svg";
import img from "@/assets/images/photos/login.svg";

function AuthLayout() {
  const navigate = useNavigate();
  const { isAuthorized } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthorized) navigate("/panel", { replace: true });
  }, [isAuthorized]);

  return (
    <Flex h="full">
      <Flex flex="1 1 50%" justify="center" align="center" hideBelow="md">
        <Box maxW={500} w="full">
          <Image src={img} alt="Логін" />
        </Box>
      </Flex>
      <Flex pos="relative" flex="1 1 50%" justify="center" align="center" bg="gray.50">
        <Box pos="absolute" top={5}>
          <Box as={Link} to="/">
            <Image src={logo} alt="Testic" w={200} />
          </Box>
        </Box>
        <Box maxW={400} w="full" p={4}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
}

export default AuthLayout;
