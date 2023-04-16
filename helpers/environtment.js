require('dotenv').config();

const environtment = {
	host: process.env.DB_HOST,
	dbPort: process.env.DB_PORT,
	port: process.env.PORT,
	dbName: process.env.DB_NAME,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	defaultFileSize: process.env.DEFAULT_FILE_SIZE,
	secretKey: process.env.SECRET_KEY,
};

module.exports = environtment;
