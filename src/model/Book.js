import {Schema, model} from 'mongoose';

const BookSchema = new Schema({
  name: String,
  year: Number,
  author: String,
  status: Boolean
});

export default model('Book', BookSchema);