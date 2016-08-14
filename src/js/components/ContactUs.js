import React from "react";
import Break from "./Break";

var ContactUs = () => {
	return (
		<div className="row-fluid contact-us-container clear-fix">
            <Break/>
			<div className="small-6 large-3 columns small-centered text-center">
                <h3>CONTACT US</h3>
			</div>
            <div className="row contact-us">
                <div className="small-12 medium-12 large-4 columns text-center">
					sales@emergesoft.in
					<br/>
					Bangalore
					<br/>
                </div>
                <div className="small-12 medium-12 large-4 columns text-center">
					+91 994 5333602 (NK)
					<br/>
					+91 973 1100227 (SK)
					<br/>
                </div>
                <div className="small-12 medium-12 large-4 columns text-center">
                    Email: sales@emergesoft.in
                    <br/>
                    Facebook: https://www.facebook.com/emergesoft
					<br/>
                </div>
            </div>
		</div>
	);
}

export default ContactUs;
