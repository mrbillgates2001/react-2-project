import React from "react";
import "./Header.scss";
import { Logo } from "../../assets/images";

const Header = () => {
	return (
		<header>
			<div className="container">
				<nav>
					<div className="navbar">
						<div className="logo">
							<a href="">
								<img src={Logo} alt="Logo" />
							</a>
						</div>
						<ul>
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#service">Services</a>
							</li>
							<li>
								<a href="#articles">Articles</a>
							</li>
							<li>
								<a href="#contacts">Contact</a>
							</li>
						</ul>
					</div>

					<div className="sales">
						<ul>
							<li>
								<a href="">Cart (0)</a>
							</li>
							<button className="btn-primary">Get a free quote</button>
						</ul>
					</div>
					<button id="BurgerMenu">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
						</svg>
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
