import { Button } from "@chakra-ui/react";

function NavbarButton({ label, Icon, ...props }) {
  return (
    <Button
      variant="ghost"
      leftIcon={<Icon boxSize={8} />}
      display="flex"
      justifyContent="start"
      h={14}
      fontSize="lg"
      fontWeight="normal"
      fill="primary.500"
      color="inherit"
      p={4}
      _active={{
        bg: "primary.500",
        fill: "white",
        color: "white",
      }}
      {...props}
    >
      {label}
    </Button>
  );
}

export default NavbarButton;
