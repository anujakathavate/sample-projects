"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _Carousel = require("./Carousel");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _GalleryCards = require("./GalleryCards");

var _GalleryCards2 = _interopRequireDefault(_GalleryCards);

var _Break = require("./Break");

var _Break2 = _interopRequireDefault(_Break);

var _WelcomeNote = require("./WelcomeNote");

var _WelcomeNote2 = _interopRequireDefault(_WelcomeNote);

var _Details = require("./Details");

var _Details2 = _interopRequireDefault(_Details);

var _ContactUs = require("./ContactUs");

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = require("./Footer");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
	_inherits(Container, _React$Component);

	function Container() {
		_classCallCheck(this, Container);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
	}

	_createClass(Container, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			$(document).ready(function () {
				$(document).foundation();
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_Header2.default, null),
				_react2.default.createElement(_Carousel2.default, null),
				_react2.default.createElement(_GalleryCards2.default, null),
				_react2.default.createElement(_Break2.default, null),
				_react2.default.createElement(_WelcomeNote2.default, null),
				_react2.default.createElement(_Break2.default, null),
				_react2.default.createElement(_Details2.default, null),
				_react2.default.createElement(_ContactUs2.default, null),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	}]);

	return Container;
}(_react2.default.Component);

exports.default = Container;