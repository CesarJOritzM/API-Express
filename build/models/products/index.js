"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  enum Status {\n    Avalible\n    Unavailable\n  }\n  type Product {\n    _id: ID!\n    name: String\n    description: String\n    status: String\n    price: Int\n  }\n\n  type Query {\n    AllProducts: [Product]!\n    Product(_id: ID!): Product\n  }\n\n  type Mutation {\n    CreateProduct(\n      name: String!\n      description: String!\n      status: Status!\n      price: Int!\n    ): Product\n  }\n"])));
exports.typeDefs = typeDefs;
var resolvers = {
  Query: {
    AllProducts: function () {
      var _AllProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, _ref) {
        var Product, products;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Product = _ref.Product;
                _context.next = 3;
                return Product.find();

              case 3:
                products = _context.sent;
                return _context.abrupt("return", products.map(function (el) {
                  return el;
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function AllProducts(_x, _x2, _x3) {
        return _AllProducts.apply(this, arguments);
      }

      return AllProducts;
    }(),
    Product: function () {
      var _Product2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent, args, _ref2) {
        var _Product, _id, product;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _Product = _ref2.Product;
                _id = args._id;
                _context2.next = 4;
                return _Product.findById(_id);

              case 4:
                product = _context2.sent;
                return _context2.abrupt("return", product);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function Product(_x4, _x5, _x6) {
        return _Product2.apply(this, arguments);
      }

      return Product;
    }()
  },
  Mutation: {
    CreateProduct: function () {
      var _CreateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parent, args, _ref3) {
        var Product, product;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Product = _ref3.Product;
                _context3.next = 3;
                return new Product(args).save();

              case 3:
                product = _context3.sent;
                return _context3.abrupt("return", product);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function CreateProduct(_x7, _x8, _x9) {
        return _CreateProduct.apply(this, arguments);
      }

      return CreateProduct;
    }()
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=index.js.map