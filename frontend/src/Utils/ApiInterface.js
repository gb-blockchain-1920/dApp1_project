const axios = require("axios");
const apiUrl = "http://35.193.103.180:3000";

exports.registerUser = (username, password, type) => {
	return new Promise(async (res, rej) => {
		const response = await axios.post(apiUrl + "/login", {
			username,
			password,
			type
		});

		console.log(response);
	});
};

exports.logIn = (email, password) => {
	return new Promise(async (res, rej) => {
		axios.get(apiUrl + "/login", {
			email,
			password
		});
	});
};

exports.checkToken = token => {
	return new Promise(async (res, rej) => {
		axios.post(apiUrl + "/checkToken", {
			token
		});
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
		axios.post(apiUrl + "/submitIdentity", {
			firstName,
			lastName,
			birthDate,
			income,
			passportNumber
		});
	});
};
