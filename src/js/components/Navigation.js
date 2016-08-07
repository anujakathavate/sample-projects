import React from "react";
import Services from "./Services";
import Products from "./Products";
import About from "./About";
import ContactUsModal from "./ContactUsModal";

export var NavigationItems = () => {
	var gotoContactUs = function() {
		$('html, body').animate({
		    scrollTop: ($('.contact-us-container').offset().top)
		}, 500);

		// $(document).on("click", $(".navigation-container"), function(e) {
		// 	$(".navigation-container li.active").removeClass("active");
		// 	$(e.target).parent().addClass("active");
		// });
	}

	return (
		<ul id="menu" className="dropdown menu" data-dropdown-menu>
			<li className="active"><a href="#" className="first">Home</a></li>
			<li><a href="#" data-open="services">Services</a></li>
			<li><a href="#" data-open="products">Products</a></li>
			<li><a href="#" data-open="about">About</a></li>
			<li><a href="#" className="last" data-open="contact">Contact Us</a></li>
		</ul>
	);
}

export default class Navigation extends React.Component {
	render() {
		return (
			<div className="hide-for-small-only" data-sticky-container>
				<nav className="navigation-container" data-sticky data-top-anchor='150' data-margin-top="0" data-margin-bottom="0">
					<div className="row-fluid">
						<div className="small-12 medium-9 large-5 columns small-centered medium-centered large-centered nav-items">
							<NavigationItems />
						</div>
					</div>
				</nav>
				<Services id="services"/>
				<Products id="products"/>
				<About id="about"/>
				<ContactUsModal id="contact" />
			</div>
		);
	}
}
