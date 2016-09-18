"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LearnMore = function LearnMore() {
    return _react2.default.createElement(
        "div",
        { className: "learn-more" },
        _react2.default.createElement(
            "a",
            { href: "#" },
            "Learn More >"
        )
    );
};

var Details = function Details() {
    return _react2.default.createElement(
        "div",
        { className: "row-fluid details clear-fix" },
        _react2.default.createElement(
            "div",
            { className: "small-12 medium-4 columns text-center" },
            _react2.default.createElement("img", { src: "solutions.jpg", alt: "This is test image" }),
            _react2.default.createElement(
                "h3",
                null,
                "Solutions"
            ),
            _react2.default.createElement(
                "span",
                null,
                "We are the single point of contact for all your website needs."
            ),
            _react2.default.createElement(LearnMore, null)
        ),
        _react2.default.createElement(
            "div",
            { className: "small-12 medium-4 columns text-center" },
            _react2.default.createElement("img", { src: "resources.gif", alt: "This is test image" }),
            _react2.default.createElement(
                "h3",
                null,
                "Resources"
            ),
            _react2.default.createElement(
                "span",
                null,
                "We have well qualified and experienced professionals in our organization to develop your websites and also to support you people in future."
            ),
            _react2.default.createElement(LearnMore, null)
        ),
        _react2.default.createElement(
            "div",
            { className: "small-12 medium-4 columns text-center" },
            _react2.default.createElement("img", { src: "technology.jpg", alt: "This is test image" }),
            _react2.default.createElement(
                "h3",
                null,
                "Technology"
            ),
            _react2.default.createElement(
                "span",
                null,
                "We use cutting edge technologies to help build your software quickly. The technology stack includes, NodeJS, ReactJS, HTML5/CSS3, Web Animations. Our softwares are never tied to a single database. We have the most flexible solutions where clients can switch between databases just like another version of software."
            ),
            _react2.default.createElement(LearnMore, null)
        )
    );
};

exports.default = Details;