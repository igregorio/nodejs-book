import {Schema, model} from 'mongoose';

const BookSchema = new Schema({
  archive: String,
  name: String,
  year: Number,
  status: Boolean,
  author:{
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
},{
  toJSON:{
    virtuals: true
  }
});

BookSchema.virtual('archive_url').get(function(){
  return `http://localhost:3333/files/${this.archive}`;
});

export default model('Book', BookSchema);