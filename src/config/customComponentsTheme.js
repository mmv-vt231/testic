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
      bg: "transparent",
      color: colorScheme != "default" ? `${colorScheme}.500` : "gray.700",
      fill: colorScheme != "default" ? `${colorScheme}.500` : "primary.500",
      _hover: {
        bg: colorScheme != "default" ? `${colorScheme}.100` : "primary.10",
      },
    }),
    link: {
      color: "gray.700",
      fontWeight: "bold",
      whiteSpace: "normal",
      _hover: {
        color: "gray.500",
        textDecorationColor: "gray.500",
      },
    },
  },
  sizes: {
    small: {
      height: 9,
      width: 9,
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

export const numberInputTheme = {
  variants: {
    outline: {
      field: {
        _focusVisible: {
          borderColor: "primary.500",
          boxShadow: null,
        },
      },
    },
  },
};

export const radioTheme = {
  baseStyle: {
    control: {
      _checked: {
        borderColor: "primary.500",
        background: "primary.500",
        _hover: {
          borderColor: "primary.400",
          background: "primary.400",
        },
      },
    },
  },
};

export const checkboxTheme = {
  baseStyle: {
    control: {
      _checked: {
        borderColor: "primary.500",
        background: "primary.500",
        _hover: {
          borderColor: "primary.400",
          background: "primary.400",
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
        minW: "200px",
        fontSize: "md",
        color: "gray.400",
        textTransform: "capitalize",
        textAlign: "center",
        whiteSpace: "pre-wrap",
        letterSpacing: "normal",
        px: 2,
        py: 4,
      },
      td: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 0 200px",
        minW: "200px",
        fontWeight: "bold",
        textAlign: "center",
        whiteSpace: "pre-wrap",
        px: 2,
        py: 4,
      },
    },
    gradebook: {
      tr: {
        display: "flex",
      },
      th: {
        textTransform: "none",
        border: "1px solid",
        borderColor: "gray.200",
        fontSize: "md",
        "&:first-of-type": {
          borderLeft: "none",
          borderTop: "none",
          p: 4,
          w: 200,
        },
        "&:not(:first-of-type)": {
          display: "flex",
          alignItems: "center",
          writingMode: "vertical-lr",
          transform: "rotate(180deg)",
          p: 3,
          w: 12,
          h: 40,
        },
      },
      td: {
        border: "1px solid",
        borderColor: "gray.200",
        fontWeight: "bold",
        p: 2,
        h: 12,
        "&:first-of-type": {
          display: "flex",
          alignItems: "center",
          flex: "0 0 200px",
        },
        "&:not(:first-of-type)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          w: 12,
        },
      },
    },
  },
};

export const tooltipTheme = {
  baseStyle: {
    _invalid: {
      "--tooltip-bg": "var(--chakra-colors-red-500)",
      "--popper-arrow-bg": "var(--chakra-colors-red-500)",
    },
  },
};

export const badgeTheme = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    rounded: "md",
    textTransform: "normal",
    fontSize: "sm",
    h: 6,
  },
  sizes: {
    sm: {
      w: 6,
      fontSize: "sm",
    },
    md: {
      w: 8,
      h: 8,
      fontSize: "md",
    },
  },
  variants: {
    solid: ({ colorScheme }) => ({
      bg: `${colorScheme}.500`,
      fill: "white",
      color: "white",
    }),
    round: ({ colorScheme }) => ({
      rounded: "full",
      bg: `${colorScheme}.100`,
      fill: `${colorScheme}.400`,
      color: `${colorScheme}.400`,
    }),
    subtle: ({ colorScheme }) => ({
      bg: `${colorScheme}.100`,
      fill: `${colorScheme}.400`,
      color: `${colorScheme}.400`,
    }),
    outline: ({ colorScheme }) => ({
      borderColor: `${colorScheme}.400`,
      fill: `${colorScheme}.500`,
      color: `${colorScheme}.600`,
    }),
  },
  defaultProps: {
    variant: "solid",
    colorScheme: "primary",
  },
};
