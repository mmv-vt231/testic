import { useState } from "react";
import recursiveValidation from "@utils/recursiveValidation";
import isEmpty from "@utils/isEmpty";

function useValidation(defaultValidation = {}) {
  const [errors, setErrors] = useState({});
  const [validation, setValidation] = useState(defaultValidation);

  const validate = data => {
    let isValid = true;

    setErrors({});

    const errors = recursiveValidation(validation, data);

    if (!isEmpty(errors)) {
      setErrors(errors);
      isValid = false;
    }

    return isValid;
  };

  return {
    errors,
    setErrors,
    validate,
    setValidation,
  };
}

export default useValidation;
