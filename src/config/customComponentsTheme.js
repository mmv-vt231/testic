export const buttonTheme = {
  baseStyle: {
    fill: "primary.500",
  },
  variants: {
    solid: ({ colorScheme }) => ({
      p: "10px 35px",
      color: "white",
      fontWeight: "bold",
      fill: "white",
      bg: colorScheme != "default" ? `${colorScheme}.500` : "primary.500",
      _hover: {
        bg: colorScheme != "default" ? `${colorScheme}.400` : "primary.400",
        _disabled: {
          bg: null,
        },
      },
    }),
    outline: {
      p: "10px 35px",
      fontWeight: "bold",
      borderWidth: 2,
      borderColor: "primary.500",
      color: "primary.500",
      _hover: {
        bg: "primary.10",
      },
    },
    ghost: ({ colorScheme }) => ({
      p: "10px 35px",
      bg: "gray.50",
      color: colorScheme != "default" ? `${colorScheme}.500` : "gray.700",
      fill: colorScheme != "default" ? `${colorScheme}.500` : "primary.500",
      _hover: {
        bg: colorScheme != "default" ? `${colorScheme}.100` : "primary.10",
      },
    }),
    link: {
      color: "gray.700",
      _hover: {
        color: "gray.500",
        textDecorationColor: "gray.500",
      },
    },
  },
  sizes: {
    small: {
      height: "35px",
      width: "35px",
      px: "0 !important",
    },
  },
  defaultProps: {
    colorScheme: "default",
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

export const cardTheme = {
  baseStyle: {
    container: {
      borderRadius: "md",
      boxShadow: "0 0 10px 0 rgba(1,1,1,.05)",
    },
  },
  defaultProps: {
    size: "lg",
  },
};

export const spinnerTheme = {
  variants: {
    custom: {
      display: "block",
      position: "absolute",
      top: "50%",
      left: "50%",
      borderWidth: "3px",
      color: "primary.500",
      translate: "-50% -50%",
    },
  },
  defaultProps: {
    variant: "custom",
    size: "xl",
  },
};

export const tableTheme = {
  variants: {
    custom: {
      tbody: {
        tr: {
          backgroundColor: "white",
          borderRadius: "md",
          boxShadow: "0 0 10px 0 rgba(1,1,1,.05)",
        },
      },
      tr: {
        display: "flex",
        "& + tr": {
          mt: 2,
        },
      },
      th: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 0 200px",
        fontSize: "md",
        color: "blackAlpha.500",
        textTransform: "capitalize",
        letterSpacing: "normal",
        px: 2,
      },
      td: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 0 200px",
        fontWeight: "bold",
        px: 2,
        py: 4,
      },
    },
  },
};
