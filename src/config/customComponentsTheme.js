import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  variants: {
    solid: () => ({
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.400",
      },
    }),
    outline: () => ({
      borderWidth: 2,
      borderColor: "primary.500",
      color: "primary.500",
      _hover: {
        bg: "primary.50",
      },
    }),
  },
});
