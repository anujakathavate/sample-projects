import React from "react";
import Break from "./Break";
import Modal from "./Modal";
import Inquiry from "./Inquiry";

var ContactUsModal = ({id}) => {
	return (
        <Modal size="full" animIn="slide-in-right" animOut="slide-out-right" id={id}>
            <h3>CONTACT US</h3>
            <div className="text-center">
				<Inquiry/>
				<a href="mailto:sales@emergesoft.in">sales@emergesoft.in</a>
            </div>
            <Break />
            <div className="text-center">
				+91 994 5333602 (North Karnataka)
				<br/>
				+91 973 1100227 (South Karnataka)
            </div>
            <Break />
            <div className="text-center">
                Twitter: https://twitter.com/emergesoft
                <br/>
                Facebook: https://www.facebook.com/emergesoft
            </div>
        </Modal>
	);
}

export default ContactUsModal;
