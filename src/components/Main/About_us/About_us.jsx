import React from "react";
import Calendar from "../../../assets/images/Calendar.svg";
import Mastercard from "../../../assets/images/Mastercard.svg";
import Plesos from "../../../assets/images/Plesos.svg";
import "./About_us.scss";

const About_us = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="about-content">
					<h1>About Us</h1>
					<p className="about-paragraph">
						Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
						neque nisi felis non ultrices massa id egestas quam velit pretium
						nu.
					</p>
					<div className="about-cards">
						<div className="a-card">
							<img src={Calendar} alt="" />
							<h3>1. Schedule online</h3>
							<p>
								Sagittis nibh scelerisque vitae egetolment vulputate sem
								elementum sed n.
							</p>
						</div>

						<div className="a-card">
							<img src={Plesos} alt="" />
							<h3>2. Pay online easily</h3>
							<p>
								Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
								amet at nunc.
							</p>
						</div>

						<div className="a-card">
							<img src={Mastercard} alt="" />
							<h3>3. Get your house cleaned</h3>
							<p>
								Nunc maecenas sollicitudin metus tellus mattis sed porttitor
								cursus eleifend.
							</p>
						</div>
					</div>

					<div className="about-btns">
            <button className="btn-primary">Get a free quote</button>
            <button className="btn-secondary">Explore services</button>
          </div>
				</div>
			</div>
		</section>
	);
};

export default About_us;
