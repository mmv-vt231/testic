import { useState } from "react";
import useValidation from "./useValidation";

function useForm(initialState, validation) {
  const [data, setData] = useState(initialState || {});
  const { errors, validate } = useValidation(validation);

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();

    const isValid = validate(data);

    if (isValid) {
      onSubmit(data);
    }
  };

  return {
    data,
    setData,
    handleSubmit,
    errors,
  };
}

export default useForm;
