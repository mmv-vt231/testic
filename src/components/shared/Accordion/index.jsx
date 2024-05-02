import React, { useState } from "react";

import { Box } from "@chakra-ui/react";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";

function Accordion({ Title, children, body }) {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <AccordionHeader Title={Title} setOpen={setOpen} open={open} />
      {open && (
        <AccordionBody open={open} {...body}>
          {children}
        </AccordionBody>
      )}
    </Box>
  );
}

export default Accordion;
