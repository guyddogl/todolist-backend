import dotenv from 'dotenv';
import app from './app';

dotenv.config();

// Porta do servidor
const PORT = process.env.PORT || 4000;

// Inicia o servidor
app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});