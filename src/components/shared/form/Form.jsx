import { createContext } from "react";

import { Box } from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";

export const FormContext = createContext(null);

function Form({ initialData, validation, onSubmit, children, ...props }) {
  const { data, setData, handleSubmit, isFormError, errors } = useForm(initialData, validation);

  const contextData = {
    data,
    setData,
    isFormError,
    errors,
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
