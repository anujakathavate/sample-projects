import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import GalleryCard from "./GalleryCard";

export default class Container extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Carousel/>
				<div className="row-fluid">
					<div className="small-4 columns no-padding">
						<GalleryCard label="Our Mission And Vision" imgSrc="mission-vision.jpg"/>
					</div>
					<div className="small-4 columns no-padding">
						<GalleryCard label="Company Profile" imgSrc="company-profile.jpg"/>
					</div>
					<div className="small-4 columns no-padding">
						<GalleryCard label="Services Overview" imgSrc="services-overview.jpeg"/>
					</div>
				</div>
			</div>
		);
	}
}
