import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import GalleryCards from "./GalleryCards";
import Break from "./Break";
import WelcomeNote from "./WelcomeNote";
import Details from "./Details";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

export default class Container extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Carousel/>				
				<GalleryCards/>
				<Break/>
				<WelcomeNote/>
				<Break/>
				<Details/>
				<ContactUs/>
				<Footer/>
			</div>
		);
	}
}
