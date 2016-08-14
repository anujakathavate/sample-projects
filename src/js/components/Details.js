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
			<div className="small-12 medium-4 columns text-center">
                <img src="solutions.jpg" alt="This is test image"/>
                <h3>Solutions</h3>
                <span>We are the single point of contact for all your website needs.</span>
                <LearnMore/>
			</div>
            <div className="small-12 medium-4 columns text-center">
                <img src="resources.gif" alt="This is test image"/>
                <h3>Resources</h3>
                <span>We have well qualified and experienced professionals in our organization to develop your websites and also to support you people in future.</span>
                <LearnMore/>
			</div>
            <div className="small-12 medium-4 columns text-center">
                <img src="technology.jpg" alt="This is test image"/>
                <h3>Technology</h3>
                <span>
                    We use cutting edge technologies to help build your software quickly. The technology stack includes, NodeJS, ReactJS, HTML5/CSS3, Web Animations. Our softwares are never tied to a single database. We have the most flexible solutions where clients can switch between databases just like another version of software.
                </span>
                <LearnMore/>
			</div>
		</div>
	);
}

export default Details;
