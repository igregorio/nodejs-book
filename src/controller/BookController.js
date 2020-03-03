import Book from '../model/Book';

// method: index, show, store, update,detroy
// I will use: index(status), store, update, destroy
class BookController{
  // create books
  async store(req, res){
    const {name,year,author,status} = req.body;
    const book = await Book.create({
      name,
      year,
      author,
      status
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
    const {book_id} = req.params;
    const {name,year,author,status} = req.body;

    await Book.updateOne({ _id: book_id},{
      name,
      year,
      author,
      status
    });

    return res.send();
  }

  // delete book
  async destroy(req,res){
    const {book_id} = req.params;
    await Book.findByIdAndDelete({ _id: book_id});
    return res.json({mensagem: "livro deletado!"});
  }

}

export default new BookController();