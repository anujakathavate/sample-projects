import React from "react";
import Navigation from "./Navigation";

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="row">
					<div className="large-3 text-center columns brand-details">
						#XXX Imaginary Area,
						<br/>
						Imaginary City, XXXXXX
					</div>
					<div className="large-6 text-center columns">
						<h1 className="brand-name">COMPANY</h1>
					</div>
					<div className="large-3 text-center columns brand-details">
						+91 XXX XXXXXX
						<br/>
						+91 YYY YYYYYY
					</div>
				</div>
				<Navigation/>
			</header>
		);
	}
}
