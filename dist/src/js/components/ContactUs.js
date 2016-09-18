"use strict";

Object.defineProperty(exports, "__esModule", {
           value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Break = require("./Break");

var _Break2 = _interopRequireDefault(_Break);

var _Inquiry = require("./Inquiry");

var _Inquiry2 = _interopRequireDefault(_Inquiry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactUs = function ContactUs() {
           return _react2.default.createElement(
                      "div",
                      { className: "row-fluid contact-us-container clear-fix" },
                      _react2.default.createElement(_Break2.default, null),
                      _react2.default.createElement(
                                 "div",
                                 { className: "small-6 large-3 columns small-centered text-center" },
                                 _react2.default.createElement(
                                            "h3",
                                            null,
                                            "CONTACT US"
                                 )
                      ),
                      _react2.default.createElement(
                                 "div",
                                 { className: "row contact-us" },
                                 _react2.default.createElement(
                                            "div",
                                            { className: "small-12 medium-12 large-4 columns text-center" },
                                            _react2.default.createElement(_Inquiry2.default, null),
                                            _react2.default.createElement(
                                                       "a",
                                                       { href: "mailto:sales@emergesoft.in" },
                                                       "sales@emergesoft.in"
                                            )
                                 ),
                                 _react2.default.createElement(
                                            "div",
                                            { className: "small-12 medium-12 large-4 columns text-center" },
                                            "+91 994 5333602",
                                            _react2.default.createElement("br", null),
                                            "+91 973 1100227",
                                            _react2.default.createElement("br", null)
                                 ),
                                 _react2.default.createElement(
                                            "div",
                                            { className: "small-12 medium-12 large-4 columns text-center" },
                                            "Twitter: https://twitter.com/emergesoft",
                                            _react2.default.createElement("br", null),
                                            "Facebook: https://www.facebook.com/emergesoft",
                                            _react2.default.createElement("br", null)
                                 )
                      )
           );
};

exports.default = ContactUs;