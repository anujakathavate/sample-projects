"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NavigationItems = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Services = require("./Services");

var _Services2 = _interopRequireDefault(_Services);

var _Products = require("./Products");

var _Products2 = _interopRequireDefault(_Products);

var _About = require("./About");

var _About2 = _interopRequireDefault(_About);

var _ContactUsModal = require("./ContactUsModal");

var _ContactUsModal2 = _interopRequireDefault(_ContactUsModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationItems = exports.NavigationItems = function NavigationItems() {
	var gotoContactUs = function gotoContactUs() {
		$('html, body').animate({
			scrollTop: $('.contact-us-container').offset().top
		}, 500);

		// $(document).on("click", $(".navigation-container"), function(e) {
		// 	$(".navigation-container li.active").removeClass("active");
		// 	$(e.target).parent().addClass("active");
		// });
	};

	return _react2.default.createElement(
		"ul",
		{ id: "menu", className: "dropdown menu", "data-dropdown-menu": true },
		_react2.default.createElement(
			"li",
			{ className: "active" },
			_react2.default.createElement(
				"a",
				{ href: "#", className: "first" },
				"Home"
			)
		),
		_react2.default.createElement(
			"li",
			null,
			_react2.default.createElement(
				"a",
				{ href: "#", "data-open": "services" },
				"Services"
			)
		),
		_react2.default.createElement(
			"li",
			null,
			_react2.default.createElement(
				"a",
				{ href: "#", "data-open": "products" },
				"Products"
			)
		),
		_react2.default.createElement(
			"li",
			null,
			_react2.default.createElement(
				"a",
				{ href: "#", "data-open": "about" },
				"About"
			)
		),
		_react2.default.createElement(
			"li",
			null,
			_react2.default.createElement(
				"a",
				{ href: "#", className: "last", "data-open": "contact" },
				"Contact Us"
			)
		)
	);
};

var Navigation = function (_React$Component) {
	_inherits(Navigation, _React$Component);

	function Navigation() {
		_classCallCheck(this, Navigation);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).apply(this, arguments));
	}

	_createClass(Navigation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "hide-for-small-only", "data-sticky-container": true },
				_react2.default.createElement(
					"nav",
					{ className: "navigation-container", "data-sticky": true, "data-top-anchor": "150", "data-margin-top": "0", "data-margin-bottom": "0" },
					_react2.default.createElement(
						"div",
						{ className: "row-fluid" },
						_react2.default.createElement(
							"div",
							{ className: "small-12 medium-9 large-5 columns small-centered medium-centered large-centered nav-items" },
							_react2.default.createElement(NavigationItems, null)
						)
					)
				),
				_react2.default.createElement(_Services2.default, { id: "services" }),
				_react2.default.createElement(_Products2.default, { id: "products" }),
				_react2.default.createElement(_About2.default, { id: "about" }),
				_react2.default.createElement(_ContactUsModal2.default, { id: "contact" })
			);
		}
	}]);

	return Navigation;
}(_react2.default.Component);

exports.default = Navigation;