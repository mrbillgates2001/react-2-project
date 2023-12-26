import React from "react";
import "./Footer.scss";
import { Logo } from "../../assets/images";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-above">
						<div className="part-1">
							<h3>Quality cleaning for your home</h3>
							<p>
								Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
								eiusmo.
							</p>
							<div className="part-one-boxes">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>

						<div className="part-2">
							<h5>Contact us</h5>
							<p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
							<ul>
								<li>(414) 567 - 2109</li>
								<li>contact@cleaning.com</li>
							</ul>
						</div>
						<div className="part-3">
							<h5>Hours</h5>
							<h6>Monday to Friday</h6>
							<span>6:00 AM - 9:00 PM</span>
							<h6>Saturday & Sunday</h6>
							<span>8:00 AM - 8:00 PM</span>
						</div>

						<div className="part-4">
							<h5>Get a free estimate</h5>
							<h1>(414) 567 - 2109</h1>
							<p>
								Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
								eiusmod.
							</p>
							<button className="btn-primary">Request a free quote</button>
						</div>
					</div>

					<div className="footer-below">
						<div className="b-left">
							<img src={Logo} alt="" />
						</div>
						<div className="b-right">
							<p>Copyright © Cleaning X | Designed by <a href="">BRIX Templates</a> - Powered by <a href="">Webflow</a> <a href="">Licenses</a></p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
