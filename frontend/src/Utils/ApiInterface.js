const axios = require("axios");
const apiUrl = "http://35.193.103.180:3000";

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

exports.checkToken = (token) => {
	return new Promise(async (res, rej) => {
		const response = await axios.get(apiUrl + "/login", {
			token: token
		});
		res(response.data);
	});
};

// exports.checkToken = token => {
// 	return new Promise(async (res, rej) => {
// 		axios.post(apiUrl + "/checkToken", {
// 			token
// 		});
// 	});
// };

exports.submitIdentity = (
	firstName,
	lastName,
	birthDate,
	income,
	passportNumber
) => {
	return new Promise(async (res, rej) => {
		axios.post(apiUrl + "/submitIdentity", {
			firstName,
			lastName,
			birthDate,
			income,
			passportNumber
		});
	});
};
