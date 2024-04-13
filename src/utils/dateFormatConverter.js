export const dateFormatConverter = date => {
  const dateValue = new Date(date);

  const formatted = new Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(dateValue);

  return formatted;
};

export default dateFormatConverter;
