import {Router} from 'express';

import BookController from './controller/BookController';

const routes = new Router();

routes.post('/book',BookController.store);
routes.get('/book',BookController.index);
routes.put('/book/:book_id',BookController.update);
routes.delete('/book/:book_id', BookController.destroy);

export default routes;