"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inquiry = function (_React$Component) {
    _inherits(Inquiry, _React$Component);

    function Inquiry() {
        _classCallCheck(this, Inquiry);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Inquiry).call(this));

        _this.state = {
            name: "sdfdsf dsf sd",
            email: "",
            phone: "",
            message: "",
            errorClass: ""
        };
        return _this;
    }

    _createClass(Inquiry, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            // TODO: This is a hack of adding click handlers which should be delt with
            // data-binding. Need to fix this later.
            // ISSUE: Foundation modal seems to be swallowing events. Root cause may be different
            // but happens only when data-reveal is added.
            $("#sendDetailsButton").on("click", function () {
                _this2.sendDetails();
            });

            $("#name").on("change", function (e) {
                _this2.onChangeHandler(e);
            });

            $("#email").on("change", function (e) {
                _this2.onChangeHandler(e);
            });

            $("#phone").on("change", function (e) {
                _this2.onChangeHandler(e);
            });

            $("#message").on("change", function (e) {
                _this2.onChangeHandler(e);
            });
        }
    }, {
        key: "onChangeHandler",
        value: function onChangeHandler(e) {
            var element = $(e.target);

            // TODO: Get rid of of DOM manipulation code here after we fix modal issue
            // mentioned in componentDidMount() method.
            switch (element.attr("id")) {
                case "name":
                    $("#name").removeClass("error");
                    this.setState({ "name": element.val() });
                    break;
                case "email":
                    $("#email").removeClass("error");
                    this.setState({ "email": element.val() });
                    break;
                case "phone":
                    $("#phone").removeClass("error");
                    this.setState({ "phone": element.val() });
                    break;
                case "message":
                    this.setState({ "message": element.val() });
                    break;
                default:
                    break;
            }
        }
    }, {
        key: "isFormValid",
        value: function isFormValid() {
            var nameValue = $("#name").val(),
                emailValue = $("#email").val(),
                phoneValue = $("#phone").val(),
                valid = true;

            // TODO: Get rid of of DOM manipulation code here after we fix modal issue
            // mentioned in componentDidMount() method.
            this.setState({ errorClass: "" });
            $("#name").removeClass("error");
            $("#email").removeClass("error");
            $("#phone").removeClass("error");

            if (nameValue === "") {
                $("#name").addClass("error");
                this.setState({ "nameErrorMessage": "Name is required" });
                valid = false;
            }

            if (emailValue === "") {
                $("#email").addClass("error");
                $("#email + div.error-message").text("Email is required");
                this.setState({ "emailErrorMessage": "Email is required" });
                valid = false;
            }

            if (emailValue !== "" && !/^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) {
                $("#email").addClass("error");
                $("#email + div.error-message").text("Email is not valid");
                this.setState({ "emailErrorMessage": "Email is not valid" });
                valid = false;
            }

            if (phoneValue !== "" && !/^(\+\d)*\s*(\(\d{3}\)\s*)*\d{3}(-{0,1}|\s{0,1})\d{2}(-{0,1}|\s{0,1})\d{2}$/.test(phoneValue)) {
                $("#phone").addClass("error");
                $("#phone + div.error-message").text("Phone number is not valid");
                this.setState({ "phoneErrorMessage": "Phone number is not valid" });
                valid = false;
            }

            if (!valid) {
                this.setState({ "errorClass": "error" });
            }

            return valid;
        }
    }, {
        key: "sendDetails",
        value: function sendDetails() {
            if (!this.isFormValid()) {
                return;
            }

            console.log("Values: ", this.state);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "row-fluid inquiry-modal" },
                _react2.default.createElement(
                    "a",
                    { href: "javascript:void(0);", "data-open": "inquiry" },
                    "Inquire Here"
                ),
                _react2.default.createElement(
                    _Modal2.default,
                    { id: "inquiry" },
                    _react2.default.createElement(
                        "h3",
                        null,
                        "Inquiry"
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement("input", { type: "text", id: "name", placeholder: "Enter your name", required: true }),
                        _react2.default.createElement(
                            "div",
                            { className: "error-message" },
                            "Name is required"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement("input", { type: "email", id: "email", placeholder: "Enter your email" }),
                        _react2.default.createElement("div", { className: "error-message" })
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement("input", { type: "text", id: "phone", placeholder: "Enter your phone number" }),
                        _react2.default.createElement(
                            "div",
                            { className: "error-message" },
                            "Phone number is not valid"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement("textarea", { placeholder: "Enter your message", id: "message", rows: "5" })
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "button",
                            { className: "button", id: "sendDetailsButton" },
                            "Send"
                        )
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "close-button", "aria-label": "Close modal", type: "button" },
                        _react2.default.createElement(
                            "span",
                            { "aria-hidden": "true" },
                            "×"
                        )
                    )
                )
            );
        }
    }]);

    return Inquiry;
}(_react2.default.Component);

exports.default = Inquiry;