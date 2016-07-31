import React from "react";
import Navigation from "./Navigation";

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="row">
					<div className="large-3 text-center columns brand-details">
						#XXX Kormangala,
						<br/>
						Bangalore, 560034
					</div>
					<div className="large-6 text-center columns">
						<h1 className="brand-name">EmergeSoft</h1>
					</div>
					<div className="large-3 text-center columns brand-details">
						+91 994 5333602
						<br/>
						+91 973 1100227
					</div>
				</div>
				<Navigation/>
			</header>
		);
	}
}
