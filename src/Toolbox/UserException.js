const setError = (code, args) => {
  return {
    customError: true,
    code: code,
    params: args,
  };
};

module.exports = { setError };
