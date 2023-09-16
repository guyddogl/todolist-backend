import express from 'express';
import prisma from '../database/prisma';
const route = express();

route.get('/', async (req, res) => {
	const response = {
		API: 'status ok',
		'DB': '',
	};

	try {
		await prisma.$connect();
		response['DB'] = 'Conexão com o banco de dados estabelecida com sucesso.';
	} catch (error) {
		response['DB'] = 'Erro ao conectar ao banco de dados.';
	} finally {
		await prisma.$disconnect();
	}

	res.json(response);
});

export default route;