"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _Navigation = require("./Navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // TODO: This is a dirty hack since onclick on button is not firing for some reason. Revisit this code.
            $('#offCanvasMenu').find("button").on("click", function () {
                $('#offCanvasMenu').foundation('close');
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "off-canvas-menu-container show-for-small-only" },
                _react2.default.createElement("div", { className: "off-canvas-menu", "data-open": "offCanvasMenu" }),
                _react2.default.createElement(
                    _Modal2.default,
                    { size: "full", animIn: "slide-in-left", animOut: "slide-out-left", id: "offCanvasMenu" },
                    _react2.default.createElement(_Navigation.NavigationItems, null)
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;