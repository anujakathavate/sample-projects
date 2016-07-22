import React from "react";

export default class Navigation extends React.Component {
	render() {
		return (
			<div data-sticky-container>
				<nav className="navigation-container" data-sticky data-top-anchor='150' data-margin-top="0" data-margin-bottom="0">
					<div className="row-fluid">
						<div className="small-5 columns small-centered">
							<ul className="dropdown menu" data-dropdown-menu>
								<li className="active"><a href="">Home</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Products</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
