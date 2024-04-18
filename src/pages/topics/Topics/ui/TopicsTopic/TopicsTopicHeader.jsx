import { Link } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";

import { ArrowDown } from "@icons";
import RoundedIcon from "@components/shared/Icons/RoundedIcon";

function TopicsTopicHeader({ id, title, setOpen, open }) {
  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  const rotate = open && { transform: "rotateX(180deg)" };

  return (
    <Flex
      p={5}
      align="center"
      justifyContent="space-between"
      bg="white"
      rounded="md"
      cursor="pointer"
      boxShadow="0 0 10px 0 rgba(1,1,1,.05)"
      onClick={handleToggle}
    >
      <Button as={Link} to={id} variant="link" fontSize="2xl">
        {title}
      </Button>
      <RoundedIcon
        Icon={ArrowDown}
        icon={{ boxSize: 8, transition: "transform 0.3s", ...rotate }}
      />
    </Flex>
  );
}

export default TopicsTopicHeader;
