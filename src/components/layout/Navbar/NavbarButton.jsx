import { Button } from "@chakra-ui/react";

function NavbarButton({ label, isActive, Icon, ...props }) {
  return (
    <Button
      variant={isActive ? "solid" : "ghost"}
      leftIcon={<Icon boxSize={8} />}
      display="flex"
      justifyContent="start"
      h={14}
      fontSize="lg"
      p={4}
      {...props}
    >
      {label}
    </Button>
  );
}

export default NavbarButton;
