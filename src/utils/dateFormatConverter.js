const dateFormatConverter = (date, format = null) => {
  const dateValue = new Date(date);

  let options;

  switch (format) {
    case "full":
      options = {
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      };
      break;
    case "time":
      options = {
        hour: date > 3599999 ? "2-digit" : undefined,
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      };
      break;

    default:
      options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      };
  }

  const formatted = new Intl.DateTimeFormat("uk-UA", options).format(dateValue);

  return formatted;
};

export default dateFormatConverter;
