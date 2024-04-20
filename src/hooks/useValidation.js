import { useState } from "react";

function useValidation(validation) {
  const [errors, setErrors] = useState({});

  const validate = data => {
    let isValid = true;

    setErrors({});

    for (const field in validation) {
      validator(validation[field], data);
    }

    return isValid;
  };

  return {
    errors,
    validate,
  };
}

const validator = (rules, value) => {
  for (const rule in rules) {
    switch (rule) {
      case "required":
        if (value?.trim() == "") {
          return "Поле обов'язкове!";
        }
        break;
      case "max":
        if (value > validation[field][rule]) {
          setErrors(errors => ({
            ...errors,
            [field]: `Максимальне значення ${validation[field][rule]}!`,
          }));
          isValid = false;
        }
        break;
      case "min":
        if (value < validation[field][rule]) {
          setErrors(errors => ({
            ...errors,
            [field]: `Мінімальне значення ${validation[field][rule]}!`,
          }));
          isValid = false;
        }
        break;
      case "isEmail":
        if (!value?.toLowerCase().match("^[\\w-.]+@([\\w-]+.)+[\\w-]{2,4}$")) {
          setErrors(errors => ({ ...errors, [field]: "Некоректна пошта!" }));
          isValid = false;
        }
        break;
      case "pattern":
        if (!value?.toLowerCase().match(validation[field][rule])) {
          setErrors(errors => ({ ...errors, [field]: "Некоректне значення!" }));
          isValid = false;
        }
        break;
      case "equalTo":
        if (value !== data[validation[field][rule]]) {
          setErrors(errors => ({ ...errors, [field]: "Значення не співпадає!" }));
          isValid = false;
        }
        break;
    }
  }
};

export default useValidation;
