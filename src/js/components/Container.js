import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default class Container extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Sidebar/>
				<Content/>
			</div>
		);
	}
}
