"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WelcomeNote = function WelcomeNote() {
	return _react2.default.createElement(
		"div",
		{ className: "row-fluid welcome" },
		_react2.default.createElement(
			"div",
			{ className: "large-3 large-centered text-center" },
			_react2.default.createElement(
				"h3",
				null,
				"WELCOME"
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "large-6 large-centered text-center" },
			_react2.default.createElement(
				"div",
				{ className: "welcome-note" },
				"We build beautiful websites with passion and take all your burdens  of day-today work on us by making the software as easy as possible that even children can play with  and use the software as it it was a toy."
			)
		),
		_react2.default.createElement(
			"div",
			{ className: "large-3 large-centered text-center" },
			_react2.default.createElement(
				"button",
				{ className: "" },
				"Learn More"
			)
		)
	);
};

exports.default = WelcomeNote;