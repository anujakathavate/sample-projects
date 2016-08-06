import React from "react";
import Services from "./Services";
import Products from "./Products";
import About from "./About";

export default class Navigation extends React.Component {
	gotoContactUs() {
		$('html, body').animate({
		    scrollTop: ($('.contact-us-container').offset().top)
		}, 500);
	}

	render() {
		return (
			<div data-sticky-container>
				<nav className="navigation-container" data-sticky data-top-anchor='150' data-margin-top="0" data-margin-bottom="0">
					<div className="row-fluid">
						<div className="small-5 columns small-centered">
							<ul className="dropdown menu" data-dropdown-menu>
								<li className="active"><a href="">Home</a></li>
								<li><a href="#" data-open="services">Services</a></li>
								<li><a href="#" data-open="products">Products</a></li>
								<li><a href="#" data-open="about">About</a></li>
								<li onClick={this.gotoContactUs}><a href="#">Contact Us</a></li>
							</ul>
						</div>
					</div>
				</nav>
				<Services id="services"/>
				<Products id="products"/>
				<About id="about"/>
			</div>
		);
	}
}
