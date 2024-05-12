import React, { useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { FormContext } from "@components/shared/form/Form";

function ErrorMessage() {
  const { errors } = useContext(FormContext);
  const toast = useToast();

  useEffect(() => {
    if (errors.answer) {
      toast({
        title: "Помилка",
        description: errors.answer,
        status: "error",
      });
    }
  }, [errors]);

  return <></>;
}

export default ErrorMessage;
