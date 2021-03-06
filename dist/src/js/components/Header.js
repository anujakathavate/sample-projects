"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Navigation = require("./Navigation");

var _Navigation2 = _interopRequireDefault(_Navigation);

var _OffCanvasMenu = require("./OffCanvasMenu");

var _OffCanvasMenu2 = _interopRequireDefault(_OffCanvasMenu);

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
		key: "render",

		// TODO: Revisit this to do away with single DOM not separate for desktop and mobile.
		value: function render() {
			return _react2.default.createElement(
				"header",
				{ className: "header" },
				_react2.default.createElement(_OffCanvasMenu2.default, null),
				_react2.default.createElement(
					"div",
					{ className: "row hide-for-small-only" },
					_react2.default.createElement(
						"div",
						{ className: "medium-3 large-3 text-center columns brand-details mail" },
						_react2.default.createElement(
							"a",
							{ href: "mailto:sales@emergesoft.in" },
							"sales@emergesoft.in"
						),
						_react2.default.createElement("br", null),
						"Bangalore"
					),
					_react2.default.createElement(
						"div",
						{ className: "medium-6 large-6 text-center columns brand" },
						_react2.default.createElement(
							"h1",
							{ className: "brand-name" },
							"EmergeSoft"
						),
						_react2.default.createElement(
							"div",
							{ className: "tag-line" },
							"We don’t just build websites, we build your business"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "medium-3 large-3 text-center columns brand-details phone" },
						"+91 994 5333602",
						_react2.default.createElement("br", null),
						"+91 973 1100227"
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "row show-for-small-only" },
					_react2.default.createElement(
						"div",
						{ className: "small-12 text-center columns brand" },
						_react2.default.createElement(
							"h1",
							{ className: "brand-name" },
							"EmergeSoft"
						),
						_react2.default.createElement(
							"div",
							{ className: "tag-line" },
							"We don’t just build websites, we build your business"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "small-6 text-center columns brand-details mail" },
						_react2.default.createElement(
							"a",
							{ href: "mailto:sales@emergesoft.in" },
							"sales@emergesoft.in"
						),
						_react2.default.createElement("br", null),
						"Bangalore"
					),
					_react2.default.createElement(
						"div",
						{ className: "small-6 text-center columns brand-details phone" },
						"+91 994 5333602",
						_react2.default.createElement("br", null),
						"+91 973 1100227"
					)
				),
				_react2.default.createElement(_Navigation2.default, null)
			);
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;