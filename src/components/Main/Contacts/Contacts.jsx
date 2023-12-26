import React from "react";
import Call from "../../../assets/images/Call.svg";

import "./Contacts.scss";

const Contacts = () => {
	return (
		<section className="contacts">
			<div className="container">
				<div className="contacts-content">
					<div className="contacts-left">
						<h2>Contact Us</h2>
						<p>
							In dignissim euismod pretium amet enim a eu nam ut urna accumsan
							pellentesque lacus duis pharetra eutortor.
						</p>

						<div className="call">
							<img src={Call} alt="" />
							<div className="text_call">
								<p>Call us now</p>
								<span>(414) 567 - 2109</span>
							</div>
						</div>

						<div className="line"></div>

						<h4>Not convinced yet?</h4>

						<p>
							Massa bibendum consectetur maurisid gravida purus, dolor dui amet
							morbi non nunc urna purus diam.
						</p>

						<div>
							<button className="btn-secondary">Browse our packages</button>
						</div>
					</div>

					<div className="contacts-right">
						<form action="">
							<div className="input-box">
								<div className="inputs">
									<label htmlFor="fullname">Full name</label>
									<input type="text" id="fullname" name="fullname" />
								</div>

								<div className="inputs">
									<label htmlFor="fullname">Phone number</label>
									<input type="text" id="fullname" name="fullname" />
								</div>

								<div className="inputs">
									<label htmlFor="fullname">Address</label>
									<input type="text" id="fullname" name="fullname" />
								</div>

								<div className="inputs">
									<label htmlFor="fullname">Email</label>
									<input type="text" id="fullname" name="fullname" />
								</div>

								<div className="inputs">
									<label htmlFor="fullname">Requested service</label>
									<input type="text" id="fullname" name="fullname" />
								</div>

								<div className="inputs">
									<label htmlFor="fullname">Day of service</label>
									<input type="text" id="fullname" name="fullname" />
								</div>
							</div>

              <div className="comment-box">
                <label htmlFor="textarea">Add a note</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              </div>

              <button className="btn-primary">Submit message</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
