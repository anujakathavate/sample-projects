"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GalleryCard = function GalleryCard(_ref) {
	var label = _ref.label;
	var imgSrc = _ref.imgSrc;
	var modalId = _ref.modalId;

	return _react2.default.createElement(
		"div",
		{ className: "gallery-card" },
		_react2.default.createElement(
			"div",
			{ className: "" },
			_react2.default.createElement("img", { src: imgSrc, alt: "This is test image" }),
			_react2.default.createElement(
				"div",
				{ className: "gallery-label", "data-open": modalId },
				label
			),
			_react2.default.createElement("div", { className: "gallery-card-overlay" })
		)
	);
};

var GalleryCards = function GalleryCards() {
	return _react2.default.createElement(
		"div",
		{ className: "row-fluid clear-fix" },
		_react2.default.createElement(
			"div",
			{ className: "small-12 medium-12 large-4 columns no-padding" },
			_react2.default.createElement(GalleryCard, { label: "Our Mission And Vision", imgSrc: "mission-vision.jpg", modalId: "mission" })
		),
		_react2.default.createElement(
			"div",
			{ className: "small-12 medium-12 large-4 columns no-padding" },
			_react2.default.createElement(GalleryCard, { label: "Company Profile", imgSrc: "company-profile.jpg", modalId: "profile" })
		),
		_react2.default.createElement(
			"div",
			{ className: "small-12 medium-12 large-4 columns no-padding" },
			_react2.default.createElement(GalleryCard, { label: "Services Overview", imgSrc: "services-overview.jpeg", modalId: "overview" })
		),
		_react2.default.createElement(
			_Modal2.default,
			{ id: "mission" },
			_react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h3",
					null,
					"Our Mission And Vision"
				),
				_react2.default.createElement(
					"p",
					null,
					"Our mission is to contribute towards the growth digital India movement by providing website services to small organizations like Schools, Colleges, Hotels, Hospitals etc."
				),
				_react2.default.createElement(
					"p",
					null,
					"Our aim is to provide cost effective and cost economical websites to our customers."
				)
			)
		),
		_react2.default.createElement(
			_Modal2.default,
			{ id: "profile" },
			_react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h3",
					null,
					"Company Profile"
				),
				_react2.default.createElement(
					"p",
					null,
					"We are purely in to website design, development and hosting and also maintenance of the same throughout the lifespan of the business. We are the leaders in providing affordable websites to all our new clients based on their requirement at a very cost effective prices."
				)
			)
		),
		_react2.default.createElement(
			_Modal2.default,
			{ id: "overview" },
			_react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h3",
					null,
					"Services Overview"
				),
				_react2.default.createElement(
					"p",
					null,
					"Website Design, Development and Hosting."
				),
				_react2.default.createElement(
					"p",
					null,
					"Website Re-designing for existing websites."
				),
				_react2.default.createElement(
					"p",
					null,
					"Website maintenance."
				),
				_react2.default.createElement(
					"p",
					null,
					"Blogs for professionals."
				)
			)
		)
	);
};

exports.default = GalleryCards;