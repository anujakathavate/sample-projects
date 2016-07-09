import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";

export default class Container extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Carousel/>
			</div>
		);
	}
}
