import React from "react";
import Modal from "./Modal";
import { NavigationItems } from "./Navigation";

export default class Header extends React.Component {
    componentDidMount() {
        // TODO: This is a dirty hack since onclick on button is not firing for some reason. Revisit this code.
        $('#offCanvasMenu').find("button").on("click", () => {
            $('#offCanvasMenu').foundation('close');
        });
    }

	render() {
		return (
            <div className="off-canvas-menu-container show-for-small-only">
                <div className="off-canvas-menu" data-open="offCanvasMenu"></div>
                <Modal size="full" animIn="slide-in-left" animOut="slide-out-left" id="offCanvasMenu">
                    <NavigationItems />
                </Modal>
            </div>
		);
	}
}
