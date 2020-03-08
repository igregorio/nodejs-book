import {Router} from 'express';
import uploadConfig from './config/upload';
import multer from 'multer';

import BookController from './controller/BookController';
import AuthorController from './controller/AuthorController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/book',upload.single('archive'),BookController.store);
routes.get('/book',BookController.index);
routes.put('/book/:book_id',upload.single('archive'),BookController.update);
routes.delete('/book/:book_id', BookController.destroy);

routes.post('/author',AuthorController.store);

export default routes;