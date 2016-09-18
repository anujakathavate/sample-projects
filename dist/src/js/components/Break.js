"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Break = function Break() {
	return _react2.default.createElement(
		"div",
		{ className: "row-fluid" },
		_react2.default.createElement(
			"div",
			{ className: "small-1 small-centered text-center break" },
			_react2.default.createElement("div", { className: "vertical-line" })
		)
	);
};

exports.default = Break;