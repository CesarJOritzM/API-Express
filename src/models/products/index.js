import { gql } from 'apollo-server-express';

const typeDefs = gql`
  enum Status {
    Avalible
    Unavailable
  }
  type Product {
    _id: ID!
    name: String
    description: String
    status: String
    price: Int
  }
  type Query {
    allProducts: [Product!]!
  }
  type Mutation {
    CreateProduct(
      name: String!
      description: String!
      status: Status!
      price: Int!
    ): Product
  }
`;
const resolvers = {
  Query: {
    allProducts: async (parent, args, { Product }) => {
      const products = await Product.find();
      return products.map((el) => {
        return el;
      });
    },
  },
  Mutation: {
    CreateProduct: async (parent, args, { Product }) => {
      const product = await new Product(args).save();
      return product;
    },
  },
};

export { typeDefs, resolvers };
