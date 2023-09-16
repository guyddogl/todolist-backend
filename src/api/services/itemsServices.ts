import * as itemsModels from '../models/itemsModels';
import { IItem } from '../../interfaces';

const createItem = async (item: IItem) => {
	const response = await itemsModels.createItem(item);
	if (response) return { status: 201, result: 'Item criado com sucesso.' };
	return { status: 400, result: 'Ocorreu um erro.' };
};

const deleteItem = async (id: number) => {
	const response = await itemsModels.deleteItem(id);
	if (response) return { status: 202, result: 'Item excluído com sucesso.' };
	return { status: 400, result: 'Ocorreu um erro.' };
};

const deleteItems = async () => {
	const response = await itemsModels.deleteItems();
	if (response) return { status: 202, result: 'Todos os items excluído com sucesso.' };
	return { status: 400, result: 'Ocorreu um erro.' };
};

const getAllItems = async () => {
	const items = await itemsModels.getAllItems();
	if (items) return { status: 200, result: items };
	return { status: 400, result: 'Bad request.' };
};

const getItem = async (id: number) => {
	const item = await itemsModels.getItem(id);
	if (item) return { status: 200, result: item };
	return { status: 400, result: 'Bad request.' };
};

const updateItem = async (item: IItem) => {
	const response = await itemsModels.updateItem(item);
	if (response) return { status: 200, result: 'Item atualizado com sucesso.' };
	return { status: 400, result: 'Ocorreu um erro.' };
};

export {
	createItem,
	deleteItem,
	deleteItems,
	getAllItems,
	getItem,
	updateItem,
};
