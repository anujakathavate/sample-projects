"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Break = require("./Break");

var _Break2 = _interopRequireDefault(_Break);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		"footer",
		{ className: "row-fluid" },
		_react2.default.createElement(_Break2.default, null),
		_react2.default.createElement(
			"div",
			{ className: "small-12 medium-6 small-centered text-center" },
			"EmergeSoft © 2016 • Privacy Policy"
		)
	);
};

exports.default = Footer;