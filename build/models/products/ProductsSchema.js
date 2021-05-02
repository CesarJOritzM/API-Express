"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productSchema = new _mongoose.Schema({
  name: String,
  description: String,
  status: String,
  price: Number
});
var Product = (0, _mongoose.model)('Products', productSchema);
var _default = Product;
exports["default"] = _default;
//# sourceMappingURL=ProductsSchema.js.map