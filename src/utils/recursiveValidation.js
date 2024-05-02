import validator from "./validator";
import isEmpty from "./isEmpty";

const recursiveValidation = (scheme, data) => {
  const errors = {};

  for (const field in scheme) {
    const type = scheme[field]?.type;

    if (type) {
      const customRules = scheme[field]?.customRules;
      let objectErrors = {};

      if (customRules) {
        const error = validator(customRules, data[field]);

        if (error) {
          errors[field] = { error };
        }
      }

      switch (type) {
        case "objectArray":
          data[field].forEach((el, i) => {
            const errors = recursiveValidation(scheme[field].rules, el);

            if (!isEmpty(errors)) {
              objectErrors[i] = errors;
            }
          });
          break;
        case "object":
          const errors = recursiveValidation(scheme[field].rules, data[field]);

          if (!isEmpty(errors)) {
            objectErrors = errors;
          }
          break;
      }

      if (!isEmpty(objectErrors)) {
        errors[field] = { ...errors[field], ...objectErrors };
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
