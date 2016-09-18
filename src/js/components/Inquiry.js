import React from "react";
import Modal from "./Modal";

export default class Inquiry extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "sdfdsf dsf sd",
            email: "",
            phone: "",
            message: "",
            errorClass: "",
        };
    }

    componentDidMount() {
        // TODO: This is a hack of adding click handlers which should be delt with
        // data-binding. Need to fix this later.
        // ISSUE: Foundation modal seems to be swallowing events. Root cause may be different
        // but happens only when data-reveal is added.
        $("#sendDetailsButton").on("click", () => {
            this.sendDetails();
        });

        $("#name").on("change", (e) => {
            this.onChangeHandler(e);
        });

        $("#email").on("change", (e) => {
            this.onChangeHandler(e);
        });

        $("#phone").on("change", (e) => {
            this.onChangeHandler(e);
        });

        $("#message").on("change", (e) => {
            this.onChangeHandler(e);
        });
    }

    onChangeHandler(e) {
        let element = $(e.target);

        // TODO: Get rid of of DOM manipulation code here after we fix modal issue
        // mentioned in componentDidMount() method.
        switch (element.attr("id")) {
            case "name":
                $("#name").removeClass("error");
                this.setState({"name": element.val()});
                break;
            case "email":
                $("#email").removeClass("error");
                this.setState({"email": element.val()});
                break;
            case "phone":
                $("#phone").removeClass("error");
                this.setState({"phone": element.val()});
                break;
            case "message":
                this.setState({"message": element.val()});
                break;
            default: break;
        }
    }

    isFormValid() {
        let nameValue = $("#name").val(),
            emailValue = $("#email").val(),
            phoneValue = $("#phone").val(),
            valid = true;

        // TODO: Get rid of of DOM manipulation code here after we fix modal issue 
        // mentioned in componentDidMount() method.
        this.setState({errorClass: ""});
        $("#name").removeClass("error");
        $("#email").removeClass("error");
        $("#phone").removeClass("error");

        if (nameValue === "") {
            $("#name").addClass("error");
            this.setState({"nameErrorMessage": "Name is required"});
            valid = false;
        }

        if (emailValue === "") {
            $("#email").addClass("error");
            $("#email + div.error-message").text("Email is required");
            this.setState({"emailErrorMessage": "Email is required"});
            valid = false;
        }

        if (emailValue !== "" && !/^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) {
            $("#email").addClass("error");
            $("#email + div.error-message").text("Email is not valid");
            this.setState({"emailErrorMessage": "Email is not valid"});
            valid = false;
        }

        if (phoneValue !== "" && !/^(\+\d)*\s*(\(\d{3}\)\s*)*\d{3}(-{0,1}|\s{0,1})\d{2}(-{0,1}|\s{0,1})\d{2}$/.test(phoneValue)) {
            $("#phone").addClass("error");
            $("#phone + div.error-message").text("Phone number is not valid");
            this.setState({"phoneErrorMessage": "Phone number is not valid"});
            valid = false;
        }

        if(!valid) {
            this.setState({"errorClass": "error"});
        }

        return valid;
    }

    sendDetails() {
        if(!this.isFormValid()) {
            return;
        }

        console.log("Values: ", this.state);
    }

    render() {
        return (
    		<div className="row-fluid inquiry-modal">
                <a href="javascript:void(0);" data-open="inquiry">Inquire Here</a>
                <Modal id="inquiry">
                    <h3>Inquiry</h3>
                    <div>
                        <input type="text" id="name" placeholder="Enter your name" required/>
                        <div className="error-message">Name is required</div>
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Enter your email"/>
                        <div className="error-message"></div>
                    </div>
                    <div>
                        <input type="text" id="phone" placeholder="Enter your phone number"/>
                        <div className="error-message">Phone number is not valid</div>
                    </div>
                    <div>
                        <textarea placeholder="Enter your message" id="message" rows="5"></textarea>
                    </div>
                    <div>
                        <button className="button" id="sendDetailsButton">Send</button>
                    </div>
                    <button className="close-button" aria-label="Close modal" type="button">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal>
    		</div>
    	);
    }
}
