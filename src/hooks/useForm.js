import { useState } from "react";
import useValidation from "./useValidation";

function useForm(initialState, validation, reset = false) {
  const [data, setData] = useState(initialState || {});
  const { errors, validate } = useValidation(validation);

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();

    const isValid = validate(data);

    if (isValid) {
      onSubmit(data);
      reset && setData(initialState);
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
