import React from "react";

export default class Modal extends React.Component {
    componentDidMount() {
        // TODO: This is a dirty hack since onclick on button is not firing for some reason. Revisit this code.
        $('#' + this.props.id).find("button").on("click", () => {
            $('#' + this.props.id).foundation('close');
        });
    }

    render() {
        return (
            <div className="reveal fast" data-reveal id={this.props.id} data-animation-in="fade-in" data-animation-out="fade-out">
                {this.props.children}
                <button className="close-button" aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    	);
    }
}
