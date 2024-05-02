import { extendTheme } from "@chakra-ui/react";
import {
  buttonTheme,
  inputTheme,
  formTheme,
  cardTheme,
  spinnerTheme,
  tableTheme,
  radioTheme,
  checkboxTheme,
  numberInputTheme,
  tooltipTheme,
  badgeTheme,
} from "./customComponentsTheme";

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
      "h1, h2, h3, h4, h5, h6, p, a": {
        color: "gray.700",
      },
    },
  },
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    NumberInput: numberInputTheme,
    Radio: radioTheme,
    Checkbox: checkboxTheme,
    Form: formTheme,
    Card: cardTheme,
    Spinner: spinnerTheme,
    Table: tableTheme,
    Tooltip: tooltipTheme,
    Badge: badgeTheme,
  },
});

export const tosterOptions = {
  defaultOptions: {
    position: "bottom-right",
    isClosable: true,
  },
};

export default theme;
