import { extendTheme } from "@chakra-ui/react";
import { buttonTheme, inputTheme, formTheme } from "./customComponentsTheme";

const theme = extendTheme({
  colors: {
    primary: {
      10: "#e7f2ff",
      50: "#dcf3ff",
      100: "#aedaff",
      200: "#7dbfff",
      300: "#4aa5ff",
      400: "#1a8cff",
      500: "#007fff",
      600: "#0059b4",
      700: "#003f82",
      800: "#002651",
      900: "#000e21",
    },
  },
  fonts: {
    heading: '"Nunito", sans-serif',
    body: '"Nunito", sans-serif',
  },
  styles: {
    global: {
      body: {
        color: "gray.700",
      },
    },
  },
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Form: formTheme,
  },
});

export default theme;
