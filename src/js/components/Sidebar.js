import React from "react";

export default class Sidebar extends React.Component {
	render() {
		return (
			<nav className="sidebar small-2 medium-3 large-4">
				<ul className="vertical medium-vertical menu">
					<li>
						<a href="">Navigation 1</a>
					</li>
					<li>
						<a href="">Navigation 2</a>
					</li>
					<li>
						<a href="">Navigation 3</a>
					</li>
				</ul>
			</nav>
		);
	}
}
