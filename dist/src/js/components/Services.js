"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Services = function Services(_ref) {
	var id = _ref.id;

	return _react2.default.createElement(
		_Modal2.default,
		{ size: "full", animIn: "slide-in-right", animOut: "slide-out-right", id: id },
		_react2.default.createElement(
			"h3",
			null,
			"Services"
		),
		_react2.default.createElement(
			"p",
			null,
			"Website is the first step towards the growth of any organization and creates the first impression in the minds of your customer. We do understand your requirements in detail and try our level best to build custom websites at a cost economical price."
		),
		_react2.default.createElement(
			"p",
			null,
			"We are in to Corporate and Business Web Design, Development and Hosting. We Do Maintenance of your Website. We Do Re-Design of your Existing Website."
		)
	);
};

exports.default = Services;