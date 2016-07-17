import React from "react";
import Break from "./Break";

var ContactUs = () => {
	return (
		<div className="row-fluid contact-us-container clear-fix">
            <Break/>
			<div className="small-2 columns small-centered text-center">
                <h3>CONTACT US</h3>
			</div>
            <div className="row-fluid contact-us">
                <div className="small-4 columns text-center">
                    #XXX Imaginary Area,
                    <br/>
                    Imaginary City, XXXXXX
                </div>
                <div className="small-4 columns text-center">
                    Phone: +91 XXX XXXXXX
                    <br/>
                    FAX: +91 YYY YYYYYY
                </div>
                <div className="small-4 columns text-center">
                    Email: company@company-domain.com
                    <br/>
                    Facebook: https://www.facebook.com/company.name
                </div>
            </div>
		</div>
	);
}

export default ContactUs;
