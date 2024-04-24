const isEmpty = value => {
  return !value || !Object.keys(value).length;
};

export default isEmpty;
