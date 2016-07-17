import React from "react";

var LearnMore = () => {
    return (
        <div className="learn-more">
            <a href="#">Learn More ></a>
        </div>
    );
}

var Details = () => {
	return (
		<div className="row-fluid details clear-fix">
			<div className="small-4 columns text-center">
                <img src="solutions.jpg" alt="This is test image"/>
                <h3>Solutions</h3>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</span>
                <LearnMore/>
			</div>
            <div className="small-4 columns text-center">
                <img src="resources.gif" alt="This is test image"/>
                <h3>Resources</h3>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</span>
                <LearnMore/>
			</div>
            <div className="small-4 columns text-center">
                <img src="technology.jpg" alt="This is test image"/>
                <h3>Technology</h3>
                <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </span>
                <LearnMore/>
			</div>
		</div>
	);
}

export default Details;
