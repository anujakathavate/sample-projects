"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).apply(this, arguments));
    }

    _createClass(Modal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            // TODO: This is a dirty hack since onclick on button is not firing for some reason. Revisit this code.
            $('#' + this.props.id).find("button.close-button").on("click", function () {
                $('#' + _this2.props.id).foundation('close');
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: this.props.size + " reveal fast", "data-reveal": true, id: this.props.id,
                    "data-animation-in": this.props.animIn ? this.props.animIn : "fade-in",
                    "data-animation-out": this.props.animOut ? this.props.animOut : "fade-out" },
                this.props.children,
                _react2.default.createElement(
                    "button",
                    { className: "close-button", "aria-label": "Close modal", type: "button" },
                    _react2.default.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "×"
                    )
                )
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

exports.default = Modal;