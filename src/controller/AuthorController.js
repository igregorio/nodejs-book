import Author from '../model/author';

class AuthorController{
  async store(req,res){
    const {name,style}= req.body;

    const author = await Author.create({
      name,
      style
    });

    return res.json(author);
  }
}

export default new AuthorController();