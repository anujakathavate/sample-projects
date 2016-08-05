import React from "react";
import Modal from "./Modal";

var GalleryCard = ({label, imgSrc, modalId}) => {
	return (
		<div className="gallery-card">
			<div className="">
				<img src={imgSrc} alt="This is test image"/>
				<div className="gallery-label" data-open={modalId}>{label}</div>
				<div className="gallery-card-overlay"></div>
			</div>
		</div>
	);
}

var GalleryCards = () => {
	return (
		<div className="row-fluid clear-fix">
			<div className="small-4 columns no-padding">
				<GalleryCard label="Our Mission And Vision" imgSrc="mission-vision.jpg" modalId="mission"/>
			</div>
			<div className="small-4 columns no-padding">
				<GalleryCard label="Company Profile" imgSrc="company-profile.jpg" modalId="profile"/>
			</div>
			<div className="small-4 columns no-padding">
				<GalleryCard label="Services Overview" imgSrc="services-overview.jpeg" modalId="overview"/>
			</div>

			<Modal id="mission">
				<div>
					<h3>Our Mission And Vision</h3>
					<p>
						Our mission is to contribute towards the growth digital India movement by providing website services to small organizations like
						Schools, Colleges, Hotels, Hospitals etc.
					</p>
					<p>
						Our aim is to provide cost effective and cost economical websites to our customers.
					</p>
				</div>
			</Modal>

			<Modal id="profile">
				<div>
					<h3>Company Profile</h3>
					<p>
						We are purely in to website design, development and hosting and also maintenance of the same throughout the lifespan of the business. We are the leaders in providing affordable websites to all our new clients based on their requirement at a very cost effective prices.
					</p>
				</div>
			</Modal>

			<Modal id="overview">
				<div>
					<h3>Services Overview</h3>
					<p>Website Design, Development and Hosting.</p>
					<p>Website Re-designing for existing websites.</p>
					<p>Website maintenance.</p>
					<p>Blogs for professionals.</p>
				</div>
			</Modal>
		</div>
	);
}

export default GalleryCards;
