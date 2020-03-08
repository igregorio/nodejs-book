import Book from '../model/Book';

// method: index, show, store, update,detroy
// I will use: index(status), store, update, destroy
class BookController{
  // create books
  async store(req, res){
    const {filename} = req.file;
    const {name,year,status} = req.body;
    const {author_id} = req.headers;

    const book = await Book.create({
      author: author_id,
      archive: filename,
      name,
      year,
      status,
      author_id
    });

    return res.json(book);
  }

  // Search all
  async index(req,res){
    const book = await Book.find();
    return res.json(book);
  }

  // update book
  async update(req,res){
    const {filename} = req.file;
    const {author_id} = req.headers;
    const {book_id} = req.params;
    const {name,year,status} = req.body;

    await Book.updateOne({ _id: book_id},{
      author: author_id,
      archive: filename,
      name,
      year,
      status
    });

    return res.json({message: 'Book successfully changed!'});
  }

  // delete book
  async destroy(req,res){
    const {book_id} = req.params;
    await Book.findByIdAndDelete({ _id: book_id});
    return res.json({mensagem: "livro deletado!"});
  }

}

export default new BookController();