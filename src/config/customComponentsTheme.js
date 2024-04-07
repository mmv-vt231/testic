export const buttonTheme = {
  variants: {
    solid: {
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.400",
        _disabled: {
          bg: null,
        },
      },
    },
    outline: {
      borderWidth: 2,
      borderColor: "primary.500",
      color: "primary.500",
      _hover: {
        bg: "primary.50",
      },
    },
  },
};

export const inputTheme = {
  variants: {
    outline: {
      field: {
        bg: "white",
        borderColor: "gray.300",
        _placeholder: {
          color: "gray.400",
          _groupInvalid: {
            color: "red.500",
          },
        },
        _focusVisible: {
          borderColor: "primary.500",
          boxShadow: null,
        },
      },
      element: {
        svg: {
          transition: "all 0.2s",
        },
        _groupFocus: {
          svg: {
            fill: "primary.500",
          },
        },
        _groupInvalid: {
          svg: {
            fill: "red.500",
          },
        },
      },
    },
  },
};

export const formTheme = {
  baseStyle: {
    container: {
      label: {
        fontWeight: "bold",
        mb: 1,
      },
    },
  },
};
