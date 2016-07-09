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

export default GalleryCard;
