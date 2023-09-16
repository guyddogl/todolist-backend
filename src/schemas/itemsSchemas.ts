import { z } from 'zod';

const createItemSchema = z.object({
	name: z.string().min(1),
});

const deleteItemSchema = z.object({
	id: z.string().min(1),
});

const getItemSchema = z.object({
	id: z.string().min(1),
});

const updateItemSchema = z.object({
	id: z.number().min(1),
	name: z.string().min(1),
	checked: z.boolean().optional(),
});

export {
	createItemSchema,
	deleteItemSchema,
	getItemSchema,
	updateItemSchema,
};