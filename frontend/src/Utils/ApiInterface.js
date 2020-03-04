const axios = require("axios");
const apiUrl = "";

exports.registerUser = (email, password, type) => {
  return new Promise(async (res, rej) => {
    axios.post(apiUrl + "/register", {
      email,
      password,
      type
    });
  });
};

exports.logIn = (email, password) => {
  return new Promise(async (res, rej) => {
    axios.post(apiUrl + "/login", {
      email,
      password
    });
  });
};
