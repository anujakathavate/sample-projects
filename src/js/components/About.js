import React from "react";
import Modal from "./Modal";

var About = ({id}) => {
	return (
		<Modal size="full" animIn="slide-in-right" animOut="slide-out-right" id={id}>
            <h3>About</h3>
            <p>
                People play the most critical part for the success of a company and especially during

                the early stages of setup and growth. Our people network is based on strong past

                relationships and majority of our leadership teams are through personal networks. For

                the engineering teams we expect more than half of our employees to be coming on-

                board with referrals. This will help build a strong and focused culture of technical

                excellence, passion for Products.
            </p>

            <p>
                If you have an urge to do something new and keep your career relevant for future, we

                may have the right opportunity for you. To know more about us kindly contact us

                at sales@emergesoft.in.
            </p>

            <p>
                Emergesoft  is led by accomplished individuals with a right balance of entrepreneurship

                and experience in running very successful business units in top multinational

                companies. The leadership team is focused on Product Development, Creating Unique

                Business Models for Partnering with Customers and Building long lasting Employee

                Relationships.
            </p>

            <p>
                We are Innovators & Creators. We push the boundaries and constantly experiment with the new to come up with

                innovative solutions. We are passionate about attempting what has never been done

                before and measure our success through that of our clients. Their triumph is ours.

                Our purpose is to help our clients shape the world by creating unforgettable moments.

                We tailor our services to each client, transforming ourselves to create the perfect

                message and experience.
            </p>

            <p>
                Creative & Marketing: We provide end to end creative services. Our experienced team

                is standing by to exceed your expectations with remarkable solutions.

                Innovation: We push boundaries and constantly experiment with the new. We are

                passionate about attempting what has never been done before. We are innovators at

                our core.
            </p>

            <p>
                Strategy & Consulting: When we work with you, your business becomes our passion.

                We learn about your industry, your products and services so that we can understand

                your needs and those of your clients.
            </p>
        </Modal>
	);
}

export default About;
