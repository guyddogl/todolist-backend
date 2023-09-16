import connection from '../database/connection';
import express from 'express';
const route = express();

route.get('/', async (req, res) => {
	res.send('Backend status OK');
});

route.get('/db', async (req, res) => {
	try {
		await connection.query('SELECT 1');
		res.send('Conexão com o banco de dados está funcionando!');
	} catch (err) {
		res.status(500).send('Erro ao conectar ao banco de dados');
	}
});

export default route;