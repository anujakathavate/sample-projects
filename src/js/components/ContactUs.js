import React from "react";
import Break from "./Break";
import Inquiry from "./Inquiry";

var ContactUs = () => {
	return (
		<div className="row-fluid contact-us-container clear-fix">
            <Break/>
			<div className="small-6 large-3 columns small-centered text-center">
                <h3>CONTACT US</h3>
			</div>
            <div className="row contact-us">
                <div className="small-12 medium-12 large-4 columns text-center">
					<Inquiry/>					
					<a href="mailto:sales@emergesoft.in">sales@emergesoft.in</a>
                </div>
                <div className="small-12 medium-12 large-4 columns text-center">
					+91 994 5333602
					<br/>
					+91 973 1100227
					<br/>
                </div>
                <div className="small-12 medium-12 large-4 columns text-center">
                    Twitter: https://twitter.com/emergesoft
                    <br/>
                    Facebook: https://www.facebook.com/emergesoft
					<br/>
                </div>
            </div>
		</div>
	);
}

export default ContactUs;
