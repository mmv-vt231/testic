const dateFormatConverter = (date, format = null) => {
  const dateValue = new Date(date);

  let options;

  switch(format) {
    case "full":
      options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
      break;
      
    default:
      options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
  }

  const formatted = new Intl.DateTimeFormat("uk-UA", options).format(dateValue);

  return formatted;
};

export default dateFormatConverter;
