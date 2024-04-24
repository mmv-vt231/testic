import { useState } from "react";
import recursiveValidation from "@utils/recursiveValidation";
import isEmpty from "@utils/isEmpty";

function useValidation(scheme) {
  const [errors, setErrors] = useState({});

  const validate = data => {
    let isValid = true;

    setErrors({});

    const errors = recursiveValidation(scheme, data);

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
  };
}

export default useValidation;
