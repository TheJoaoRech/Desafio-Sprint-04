const dotenv = require('dotenv');

dotenv.config({
	path: process.env.NODE_ENV,
});

module.exports = {
	database: {
		host: process.env.BD_HOST,
		port: process.env.BD_PORT,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		collection: process.env.DB_COLLECTION,
	}
};