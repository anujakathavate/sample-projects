import React from "react";

export default class Navigation extends React.Component {
	render() {
		return (
			<nav className="navigation-container">
				<div className="row">
					<div className="small-6 columns small-centered">
						<ul className="dropdown menu" data-dropdown-menu>
							<li className="active"><a href="">Home</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Products</a></li>
							<li><a href="#">About</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
