import prisma from '../../database/prisma';
import { IItem } from '../../interfaces';

const createItem = async (item: IItem) => {
	const result = await prisma.items_list.create({
		data: {
			name: item.name,
		},
	});
	return result;
};

const deleteItem = async (id: number) => {
	const result = await prisma.items_list.delete({
		where: {
			id,
		},
	});
	return result;
};

const deleteItems = async () => {
	const result = await prisma.items_list.deleteMany();
	return result;
};

const getAllItems = async (): Promise<IItem[]> => {
	const items = await prisma.items_list.findMany({
		orderBy: [
			{
				id: 'asc',
			},
		] });
	return items;
};

const getItem = async (id: number): Promise<IItem | null> => {
	const item = await prisma.items_list.findUnique({
		where: {
			id: id,
		},
	});
	return item;
};

const updateItem = async (item: IItem) => {
	const updateData = {
		name: item.name,
		...(item.checked !== undefined && { checked: item.checked }),
	};
	const result = await prisma.items_list.update({
		where: {
			id: item.id,
		},
		data: updateData,
	});
	console.log(result);
	return result;
};

export {
	createItem,
	deleteItem,
	deleteItems,
	getAllItems,
	getItem,
	updateItem,
};