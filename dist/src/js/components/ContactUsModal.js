"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Break = require("./Break");

var _Break2 = _interopRequireDefault(_Break);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _Inquiry = require("./Inquiry");

var _Inquiry2 = _interopRequireDefault(_Inquiry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactUsModal = function ContactUsModal(_ref) {
    var id = _ref.id;

    return _react2.default.createElement(
        _Modal2.default,
        { size: "full", animIn: "slide-in-right", animOut: "slide-out-right", id: id },
        _react2.default.createElement(
            "h3",
            null,
            "CONTACT US"
        ),
        _react2.default.createElement(
            "div",
            { className: "text-center" },
            _react2.default.createElement(_Inquiry2.default, null),
            _react2.default.createElement(
                "a",
                { href: "mailto:sales@emergesoft.in" },
                "sales@emergesoft.in"
            )
        ),
        _react2.default.createElement(_Break2.default, null),
        _react2.default.createElement(
            "div",
            { className: "text-center" },
            "+91 994 5333602 (North Karnataka)",
            _react2.default.createElement("br", null),
            "+91 973 1100227 (South Karnataka)"
        ),
        _react2.default.createElement(_Break2.default, null),
        _react2.default.createElement(
            "div",
            { className: "text-center" },
            "Twitter: https://twitter.com/emergesoft",
            _react2.default.createElement("br", null),
            "Facebook: https://www.facebook.com/emergesoft"
        )
    );
};

exports.default = ContactUsModal;