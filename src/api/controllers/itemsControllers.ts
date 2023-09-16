import express from 'express';
import * as itemsServices from '../services/itemsServices';
import { createItemSchema, deleteItemSchema, getItemSchema, updateItemSchema } from '../../schemas';
import { ZodError } from 'zod';

const createItem = async (req: express.Request, res: express.Response) => {
	try {
		const { name } = createItemSchema.parse(req.body);
		const item = { name };
		const response = await itemsServices.createItem(item);
		res.status(response.status).json(response.result);
	} catch(error: unknown) {
		if (error instanceof ZodError) {
			res.status(400).json(`Bad request: ${error.issues[0].message}.`);
		} else {
			res.status(500).json('Unknown error.');
		}
	}
};

const deleteItem = async (req: express.Request, res: express.Response) => {
	try {
		const { id } = deleteItemSchema.parse(req.params);
		const idNumber = Number(id);
		if (isNaN(idNumber)) {
			res.status(400).json('Bad request: \'id\' deve ser um número.');
			return;
		}
		const response = await itemsServices.deleteItem(idNumber);
		res.status(response.status).json(response.result);
	} catch(error: unknown) {
		if (error instanceof ZodError) {
			res.status(400).json(`Bad request: ${error.issues[0].message}.`);
		} else {
			res.status(500).json('Unknown error.');
		}
	}
};

const deleteItems = async (req: express.Request, res: express.Response) => {
	try {
		const response = await itemsServices.deleteItems();
		res.status(response.status).json(response.result);
	} catch(error: unknown) {
		if (error instanceof ZodError) {
			res.status(400).json(`Bad request: ${error.issues[0].message}.`);
		} else {
			res.status(500).json('Unknown error.');
		}
	}
};

const getAllItems = async (req: express.Request, res: express.Response) => {
	const response = await itemsServices.getAllItems();
	res.status(response.status).json(response.result);
};

const getItem = async (req: express.Request, res: express.Response) => {
	try {
		const { id } = getItemSchema.parse(req.params);
		const idNumber = Number(id);
		if (isNaN(idNumber)) {
			res.status(400).json('Bad request: \'id\' deve ser um número.');
			return;
		}
		const response = await itemsServices.getItem(idNumber);
		res.status(response.status).json(response.result);
	} catch(error: unknown) {
		if (error instanceof ZodError) {
			res.status(400).json(`Bad request: ${error.issues[0].message}.`);
		} else {
			res.status(500).json('Unknown error.');
		}
	}
};

const updateItem = async (req: express.Request, res: express.Response) => {
	try {
		const { id, name, checked } = updateItemSchema.parse(req.body);
		const updateData = {
			id,
			name,
			...(checked !== undefined && { checked: checked }),
		};
		const response = await itemsServices.updateItem(updateData);
		res.status(response.status).json(response.result);
	} catch(error: unknown) {
		console.log(error);
		if (error instanceof ZodError) {
			res.status(400).json(`Bad request: ${error.issues[0].path[0]} ${error.issues[0].message}.`);
		} else {
			res.status(500).json('Unknown error.');
		}
	}
};

export {
	createItem,
	deleteItem,
	deleteItems,
	getAllItems,
	getItem,
	updateItem,
};