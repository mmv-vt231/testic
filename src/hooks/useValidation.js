import { useState } from "react";

function useValidation(validation) {
  const [errors, setErrors] = useState({});

  const validate = data => {
    let isValid = true;

    setErrors({});

    for (const field in validation) {
      for (const rule in validation[field]) {
        switch (rule) {
          case "required":
            if (data[field]?.trim() == "") {
              setErrors(errors => ({ ...errors, [field]: "Поле обов'язкове!" }));
              isValid = false;
            }
            break;
          case "pattern":
            if (!data[field]?.toLowerCase().match(validation[field][rule])) {
              setErrors(errors => ({ ...errors, [field]: "Некоректне значення!" }));
              isValid = false;
            }
            break;
          case "equalTo":
            if (data[field] !== data[validation[field][rule]]) {
              setErrors(errors => ({ ...errors, [field]: "Значення не співпадає!" }));
              isValid = false;
            }
            break;
        }
      }
    }

    return isValid;
  };

  return {
    errors,
    validate,
  };
}

export default useValidation;
