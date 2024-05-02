const validator = (rules, value, data = []) => {
  for (const rule in rules) {
    switch (rule) {
      //Default rules
      case "optional":
        if (value != null && typeof value === "string" && value?.trim() == "") {
          return "Поле обов'язкове!";
        }
        break;

      case "required":
        if ((typeof value === "string" && value?.trim() == "") || !value) {
          return "Поле обов'язкове!";
        }
        break;
      case "extensions":
        const fileExtension = value instanceof File && value?.type.split("/");

        if (
          rules?.required &&
          (!value || !fileExtension || !rules[rule].includes(fileExtension[1]))
        ) {
          return "Невірний формат!";
        } else if (
          value instanceof File &&
          (!fileExtension || !rules[rule].includes(fileExtension[1]))
        ) {
          return "Невірний формат!";
        }
        break;
      case "max":
        if (value > rules[rule]) {
          return `Максимальне значення ${rules[rule]}!`;
        }
        break;
      case "min":
        if (value < rules[rule]) {
          return `Мінімальне значення ${rules[rule]}!`;
        }
        break;
      case "isEmail":
        if (!value?.toLowerCase().match("^[\\w-.]+@([\\w-]+.)+[\\w-]{2,4}$")) {
          return "Некоректна пошта!";
        }
        break;
      case "pattern":
        if (!value?.toLowerCase().match(rules[rule])) {
          return "Некоректне значення!";
        }
        break;
      case "equalTo":
        if (value !== data[rules[rule]]) {
          return "Значення не співпадає!";
        }
        break;

      //Custom rules

      case "relativeKeysRequired":
        if (!value.every(key => !!key.answer)) {
          return "Оберіть відповіді до усіх питань!";
        }
        break;
      case "answerRequired":
        if (!value.length) {
          return "Необхідно обрати відповідь!";
        }
        break;
    }
  }
};

export default validator;
