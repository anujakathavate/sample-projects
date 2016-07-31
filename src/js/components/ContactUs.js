import React from "react";
import Break from "./Break";

var ContactUs = () => {
	return (
		<div className="row-fluid contact-us-container clear-fix">
            <Break/>
			<div className="small-2 columns small-centered text-center">
                <h3>CONTACT US</h3>
			</div>
            <div className="row contact-us">
                <div className="small-4 columns text-center">
					#XXX Kormangala,
					<br/>
					Bangalore, 560034
                </div>
                <div className="small-4 columns text-center">
					+91 994 5333602
					<br/>
					+91 973 1100227
                </div>
                <div className="small-4 columns text-center">
                    Email: contact@emergesoft.com
                    <br/>
                    Facebook: https://www.facebook.com/emergesoft
                </div>
            </div>
		</div>
	);
}

export default ContactUs;
