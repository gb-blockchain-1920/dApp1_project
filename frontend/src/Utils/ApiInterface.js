const axios = require("axios");
const apiUrl = "";

export const registerUser = (email, password, type) => {
  return new Promise(async (res, rej) => {
    axios.post(apiUrl + "/register", {
      email,
      password,
      type
    });
  });
};

export const logIn = (email, password) => {
  return new Promise(async (res, rej) => {
    axios.post(apiUrl + "/login", {
      email,
      password
    });
  });
};
