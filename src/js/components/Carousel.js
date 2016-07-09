import React from "react";

// TODO: Implememt Carousel features.
export default class Carousel extends React.Component {
	render() {
		return (
			<div className="row-fluid">
				<div className="small-12 carousel">
					<img src="image-1.jpg" alt="This is test image"/>
					<div className="carousel-message">
						Leader in Blah Blah.. and Blah Blah Technologies
					</div>
				</div>
			</div>
		);
	}
}
