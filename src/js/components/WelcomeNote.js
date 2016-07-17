import React from "react";

var WelcomeNote = () => {
	return (
		<div className="row-fluid welcome">
			<div className="small-2 small-centered text-center">
                <h3>WELCOME</h3>
			</div>
            <div className="small-6 small-centered text-center">
                <div className="welcome-note">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </div>
			</div>
            <div className="small-2 small-centered text-center">
                <button className="">Learn More</button>
			</div>
		</div>
	);
}

export default WelcomeNote;
