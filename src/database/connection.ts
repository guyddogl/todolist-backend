import mysql, { PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectionConfig: PoolOptions = {
	host: process.env.MYSQL_HOST as string,
	port: parseInt(process.env.MYSQL_PORT as string, 10),
	user: process.env.MYSQL_USER as string,
	password: process.env.MYSQL_PASSWORD as string,
	database: process.env.MYSQL_DATABASE_NAME as string,
	waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS?.toLowerCase() === 'true',
	connectionLimit: parseInt(process.env.MYSQL_CONNECTION_LIMIT as string, 10),
	queueLimit: parseInt(process.env.MYSQL_QUEUE_LIMIT as string, 10),
};

const connection = mysql.createPool(connectionConfig);

export default connection;