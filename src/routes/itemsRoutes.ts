import express from 'express';
import * as itemsControllers from '../api/controllers/itemsControllers';

const route = express();

route.get('/:id', itemsControllers.getItem);
route.get('/', itemsControllers.getAllItems);
route.post('/', itemsControllers.createItem);
route.put('/', itemsControllers.updateItem);
route.delete('/:id', itemsControllers.deleteItem);
route.delete('/', itemsControllers.deleteItems);

export default route;