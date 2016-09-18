"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Products = function Products(_ref) {
	var id = _ref.id;

	return _react2.default.createElement(
		_Modal2.default,
		{ size: "full", animIn: "slide-in-right", animOut: "slide-out-right", id: id },
		_react2.default.createElement(
			"h3",
			null,
			"Products"
		),
		_react2.default.createElement(
			"p",
			null,
			"Get Affordable website designed by us ",
			_react2.default.createElement("br", null),
			"Get Business websites designed by us.",
			_react2.default.createElement("br", null),
			"Get professional websites designed by us.",
			_react2.default.createElement("br", null),
			"Get good looking blogs designed by us.",
			_react2.default.createElement("br", null)
		)
	);
};

exports.default = Products;