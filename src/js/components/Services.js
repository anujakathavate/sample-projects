import React from "react";
import Modal from "./Modal";

var Services = ({id}) => {
	return (
		<Modal size="full" animIn="slide-in-right" animOut="slide-out-right" id={id}>
            <h3>Services</h3>
            Website is the first step towards the growth of any organization and creates the first impression

            in the minds of your customer. We do understand your requirements in detail and try our level

            best to build custom websites at a cost economical price.

            We are in to Corporate and Business Web Design, Development and Hosting.

            We Do Maintenance of your Website.

            We Do Re-Design of your Existing Website.
        </Modal>
	);
}

export default Services;
