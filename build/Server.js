"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _ProductsSchema = _interopRequireDefault(require("./models/products/ProductsSchema"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
var server = new _apolloServerExpress.ApolloServer({
  context: {
    Product: _ProductsSchema["default"]
  },
  modules: [require('./models/products')]
});
server.applyMiddleware({
  app: app
});
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose["default"].connect(process.env.DATABASE, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
          });

        case 3:
          console.log('✨ MongoDB is conected');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log("Error:".concat(_context.t0));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 6]]);
}))();
app.listen(PORT, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(PORT).concat(server.graphqlPath));
});
//# sourceMappingURL=Server.js.map