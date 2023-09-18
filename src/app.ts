import express from 'express';
import cors from 'cors';
import { itemsRoutes, status } from './routes/index';

const app = express();

app.use(cors({
	origin: '*',
}));

app.use(express.json());

app.use('/items', itemsRoutes);

app.use('/status', status);

app.use((req, res) => {
	res.status(404);
});

export default app;