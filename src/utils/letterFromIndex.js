const letters = ["А", "Б", "В", "Г", "Ґ", "Д", "Е", "Є", "Ж", "З"];

const letterFromIndex = index => {
  return letters[index] || null;
};

export default letterFromIndex;
