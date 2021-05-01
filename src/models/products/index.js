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
    AllProducts: [Product]!
    Product(_id: ID!): Product
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
    AllProducts: async (parent, args, { Product }) => {
      const products = await Product.find();
      return products.map((el) => {
        return el;
      });
    },
    Product: async (parent, args, { Product }) => {
      const { _id } = args;
      const product = await Product.findById(_id);
      return product;
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
