const axios = require("axios");
const apiUrl = "http://35.193.103.180:3000";

const appendToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  }
};

exports.registerUser = (username, password, type) => {
  return new Promise(async (res, rej) => {
    const response = await axios.post(apiUrl + "/login", {
      username: username,
      password: password,
      type: type
    });
    res(response.data);
  });
};

exports.checkToken = token => {
  return new Promise(async (res, rej) => {
    appendToken();
    const response = await axios.get(apiUrl + "/login");
    res(response.data);
  });
};

exports.submitIdentity = (
  firstName,
  lastName,
  birthDate,
  income,
  passportNumber
) => {
  return new Promise(async (res, rej) => {
    const response = await axios.post(apiUrl + "/user", {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      income: income,
      passportNumber: passportNumber
    });
  });
};

exports.getCompanies = () => {
  return new Promise(async (res, rej) => {
    appendToken();
    const response = await axios.get(apiUrl + "/approve");
    res(response);
  });
};

exports.approveCompany = id => {
  return new Promise(async (res, rej) => {
    appendToken();
    const response = await axios.post(apiUrl + "/approve", { companyId: id });
    res(response);
  });
};

exports.getApprovedUsers = () => {
  return new Promise(async (res, rej) => {
    appendToken();
    const response = await axios.get(apiUrl + "/corporate");
    res(response);
  });
};
