import express from 'express';
import cors from 'cors';
import { itemsRoutes, status } from './routes/index';

const app = express();

app.use(cors({
	origin: ['http://127.0.0.1:5173', 'https://todolist-2xa9.onrender.com/'],
}));

app.use(express.json());

app.use('/items', itemsRoutes);

app.use('/status', status);

app.use((req, res) => {
	res.status(404);
});

export default app;