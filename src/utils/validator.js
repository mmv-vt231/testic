const validator = (rules, value, data = []) => {
  for (const rule in rules) {
    switch (rule) {
      case "required":
        if ((typeof value === "string" && value?.trim() == "") || !value) {
          return "Поле обов'язкове!";
        }
        break;
      case "answerRequired":
        if (!value.length) {
          return "Необхідно обрати відповідь!";
        }
        break;
      case "extensions":
        const fileExtension = value?.type.split("/");

        if (rules?.required && (!value || !fileExtension || !rules[rule].includes(fileExtension[1]))) {
          return "Невірний формат!";
        } else if (value && (!fileExtension || !rules[rule].includes(fileExtension[1]))) {
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
    }
  }
};

export default validator;
