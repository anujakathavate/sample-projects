import React from "react";

// TODO: Implememt Carousel features.
export default class Carousel extends React.Component {
	render() {
		return (
			<div className="row-fluid relative">
				<div className="small-12">
					<div className="orbit" role="region" aria-label="Favorite Nature Pictures" data-orbit>
						<ul className="orbit-container carousel">
							<li className="is-active orbit-slide">
							  <img className="orbit-image" src="image-1.jpg" alt="Nature"/>
							</li>
							<li className="orbit-slide">
							  <img className="orbit-image" src="image-2.jpg" alt="Nature"/>
							</li>
							<li className="orbit-slide">
							  <img className="orbit-image" src="image-3.png" alt="Nature"/>
							</li>
						</ul>
						<nav className="orbit-bullets">
							<button className="is-active" data-slide="0"></button>
							<button data-slide="1"></button>
							<button data-slide="2"></button>
						</nav>
					</div>
				</div>
				<div className="carousel-message">
					We are problem solvers, innovators, and creators
				</div>
			</div>
		);
	}
}
