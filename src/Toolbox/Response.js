const util = require("util");

const success = (data) => {
  return {
    isSuccess: true,
    data: data,
  };
};

const error = (data) => {
  let message = data.params !== undefined ? util.format(data.code.Text, data.params) : data.code.Text;
  return {
    isSuccess: false,
    data: null,
    code: data.code.Id,
    message,
    detail: data.customError ? null : data,
  };
};

module.exports = { success, error };
