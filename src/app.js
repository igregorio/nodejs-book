import express from 'express';
import mongoose from 'mongoose';
import routes from './router';

class App{
  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://book:book@book-kv55d.mongodb.net/test?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.medlewares();
    this.routes();
  }

  medlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}

export default new App().server;