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
            <div className={this.props.size + " reveal fast"} data-reveal id={this.props.id}
                data-animation-in={this.props.animIn ? this.props.animIn : "fade-in"}
                data-animation-out={this.props.animOut ? this.props.animOut : "fade-out"}>
                {this.props.children}
                <button className="close-button" aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    	);
    }
}
