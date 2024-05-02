import React, { createContext } from "react";
import useForm from "@hooks/useForm";

import { Box } from "@chakra-ui/react";

export const FormContext = createContext(null);

function Form({ initialData, validation, onSubmit, reset, children, ...props }) {
  const { data, setData, handleSubmit, errors, setErrors, setValidation } = useForm(
    initialData,
    validation,
    reset
  );

  const contextData = {
    data,
    setData,
    errors,
    setErrors,
    setValidation,
  };

  const submitForm = e => {
    handleSubmit(e, onSubmit);
  };

  return (
    <FormContext.Provider value={contextData}>
      <Box as="form" onSubmit={submitForm} {...props}>
        {children}
      </Box>
    </FormContext.Provider>
  );
}

export default Form;
