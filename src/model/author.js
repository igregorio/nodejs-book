import {Schema, model} from 'mongoose';

const AuthorSchema = new Schema({
  name: String,
  style: String
});

export default model('Author',AuthorSchema);