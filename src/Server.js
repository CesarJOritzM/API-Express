import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import Product from './models/products/ProductsSchema';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  context: { Product },
  modules: [require('./models/products/index')],
});

server.applyMiddleware({ app });

mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
      )
    );
  })
  .catch((err) => {
    console.log(`Error:${err}`);
  });
