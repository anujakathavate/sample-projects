import React from "react";

var GalleryCard = ({label, imgSrc}) => {
	return (
		<div className="gallery-card">
			<div className="">
				<img src={imgSrc} alt="This is test image"/>
				<div className="gallery-label">{label}</div>
				<div className="gallery-card-overlay"></div>
			</div>
		</div>
	);
}

var GalleryCards = () => {
	return (
		<div className="row-fluid clear-fix">
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
	);
}

export default GalleryCards;
