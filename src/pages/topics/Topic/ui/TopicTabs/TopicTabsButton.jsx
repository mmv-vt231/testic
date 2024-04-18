import { Link, useMatch } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function TopicTabsButton({ path, children }) {
  const match = useMatch({ path });

  const style = match && { borderColor: "primary.500", color: "primary.500" };

  return (
    <Button
      as={Link}
      to={path}
      variant="ghost"
      borderRadius={0}
      borderBottom="2px solid transparent"
      fontSize="xl"
      fontWeight="bold"
      color="gray.400"
      px={5}
      _hover={{ bgColor: "transparent" }}
      {...style}
    >
      {children}
    </Button>
  );
}

export default TopicTabsButton;
