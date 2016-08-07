import React from "react";
import Navigation from "./Navigation";

export default class Header extends React.Component {
	// TODO: Revisit this do away with single DOM not separate for desktop and mobile.
	render() {
		return (
			<header className="header">
				<div className="row hide-for-small-only">
					<div className="medium-3 large-3 text-center columns brand-details mail">
						sales@emergesoft.in
						<br/>
						Bangalore
					</div>
					<div className="medium-6 large-6 text-center columns brand">
						<h1 className="brand-name">EmergeSoft</h1>
					</div>
					<div className="medium-3 large-3 text-center columns brand-details phone">
						+91 994 5333602
						<br/>
						+91 973 1100227
					</div>
				</div>
				<div className="row show-for-small-only">
					<div className="small-12 text-center columns brand">
						<h1 className="brand-name">EmergeSoft</h1>
					</div>
					<div className="small-6 text-center columns brand-details mail">
						sales@emergesoft.in
						<br/>
						Bangalore
					</div>
					<div className="small-6 text-center columns brand-details phone">
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
