import express from 'express';
import cors from 'cors';
import { status } from './routes/index';

const baseApiUrl = '/api';

// App Express
const app = express();

// Cors
app.use(cors({
	origin: ['http://localhost:3000'],
}));

app.use(express.json());

app.get('/', async (req, res) => {
	res.send('Hello, world!');
});
app.get(`${baseApiUrl}/`, async (req, res) => {
	res.send('API status OK');
});
app.use(`${baseApiUrl}/status`, status);

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
	res.status(404);
});

export default app;