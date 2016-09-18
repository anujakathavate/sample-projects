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

// TODO: Implememt Carousel features.

var Carousel = function (_React$Component) {
	_inherits(Carousel, _React$Component);

	function Carousel() {
		_classCallCheck(this, Carousel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).apply(this, arguments));
	}

	_createClass(Carousel, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "row-fluid relative" },
				_react2.default.createElement(
					"div",
					{ className: "small-12" },
					_react2.default.createElement(
						"div",
						{ className: "orbit", role: "region", "aria-label": "Favorite Nature Pictures", "data-orbit": true },
						_react2.default.createElement(
							"ul",
							{ className: "orbit-container carousel" },
							_react2.default.createElement(
								"li",
								{ className: "is-active orbit-slide" },
								_react2.default.createElement("img", { className: "orbit-image", src: "computer.jpg", alt: "Nature" })
							),
							_react2.default.createElement(
								"li",
								{ className: "orbit-slide" },
								_react2.default.createElement("img", { className: "orbit-image", src: "image-2.jpg", alt: "Nature" })
							),
							_react2.default.createElement(
								"li",
								{ className: "orbit-slide" },
								_react2.default.createElement("img", { className: "orbit-image", src: "student.jpg", alt: "Nature" })
							),
							_react2.default.createElement(
								"li",
								{ className: "orbit-slide" },
								_react2.default.createElement("img", { className: "orbit-image", src: "matrix.jpg", alt: "Nature" })
							)
						),
						_react2.default.createElement(
							"nav",
							{ className: "orbit-bullets" },
							_react2.default.createElement("button", { className: "is-active", "data-slide": "0" }),
							_react2.default.createElement("button", { "data-slide": "1" }),
							_react2.default.createElement("button", { "data-slide": "2" }),
							_react2.default.createElement("button", { "data-slide": "3" })
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "carousel-message" },
					"We expertise in website designing"
				)
			);
		}
	}]);

	return Carousel;
}(_react2.default.Component);

exports.default = Carousel;