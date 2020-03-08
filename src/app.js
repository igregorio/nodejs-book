import express from 'express';
import mongoose from 'mongoose';
import routes from './router';
import path from 'path';

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

    this.server.use(
      '/files', 
      express.static(path.resolve(__dirname,'..','upload'))
    );
  }

  routes(){
    this.server.use(routes);
  }
}

export default new App().server;