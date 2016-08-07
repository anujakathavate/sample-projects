import React from "react";
import ContactUs from "./ContactUs";
import Break from "./Break";
import Modal from "./Modal";

var ContactUsModal = ({id}) => {
	return (
        <Modal size="full" animIn="slide-in-right" animOut="slide-out-right" id={id}>
            <h3>CONTACT US</h3>
            <div className="text-center">
				sales@emergesoft.in
				<br/>
				Bangalore
            </div>
            <Break />
            <div className="text-center">
				+91 994 5333602
				<br/>
				+91 973 1100227
            </div>
            <Break />
            <div className="text-center">
                Email: sales@emergesoft.in
                <br/>
                Facebook: https://www.facebook.com/emergesoft
            </div>
        </Modal>
	);
}

export default ContactUsModal;
