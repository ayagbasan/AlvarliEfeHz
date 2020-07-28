const Config = require("./Config");

const warn = (...params) => {
  if (Config.LogEnabled === true) params.length === 1 ? console.warn(params[0]) : console.warn(params);
};

const log = (...params) => {
  if (Config.LogEnabled === true) params.length === 1 ? console.log(params[0]) : console.log(params);
};

const error = (...params) => {
  if (Config.LogEnabled === true) params.length === 1 ? console.log(params[0]) : console.error(params);
};

module.exports = { warn, log, error };
