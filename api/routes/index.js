const {Router} = require('express');
const employee = require('');

module.exports = (server) => {
	server.use((req, res, next) => {
		employee(server, new Router());
		next();
	});
};