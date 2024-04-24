import validator from "./validator";
import isEmpty from "./isEmpty";

const recursiveValidation = (scheme, data) => {
  const errors = {};

  for (const field in scheme) {
    const type = scheme[field]?.type;

    if (type) {
      switch (type) {
        case "objectArray":
          const objectErrors = {};

          data[field].forEach((el, i) => {
            const errors = recursiveValidation(scheme[field].rules, el);

            if (!isEmpty(errors)) {
              objectErrors[i] = errors;
            }
          });

          if (!isEmpty(objectErrors)) {
            errors[field] = objectErrors;
          }
          break;
      }
    } else {
      const error = validator(scheme[field], data[field], data);

      if (error) {
        errors[field] = error;
      }
    }
  }

  return errors;
};

export default recursiveValidation;
