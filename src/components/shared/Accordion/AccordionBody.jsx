import React from "react";
import { Box } from "@chakra-ui/react";

function AccordionBody({ children }) {
  return (
    <Box
      overflow="hidden"
      bg="blue.50"
      borderBottomRadius="md"
      border="2px solid"
      borderColor="primary.300"
    >
      <Box mt={4} px={4} pb={4}>
        {children}
      </Box>
    </Box>
  );
}

export default AccordionBody;
