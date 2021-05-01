import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import Product from './models/products/ProductsSchema';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
  context: { Product },
  modules: [require('./models/products')],
});

server.applyMiddleware({ app });

(async function () {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✨ MongoDB is conected');
  } catch (error) {
    console.log(`Error:${error}`);
  }
})();

app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
