import React from 'react'
import './about.css'
import { FiAward } from 'react-icons/fi'
import guts from '../../assets/guts.jpg'

const About = () => {
	return (
		<section id="about">
			<h5>About me</h5>
			<h2>About me</h2>


			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={guts} alt="" />
					</div>
				</div>

				<div className="about_container">
					{/* need to rethink what to put on these cards */}
					<div className="about__cards">
						<article className="about__card">
							<FiAward className="about__icon" />
							<h5>Experience</h5>
							<small>X years experience</small>
						</article>

						<article className="about__card">
							<FiAward className="about__icon" />
							<h5>Experience</h5>
							<small>X years experience</small>
						</article>

						<article className="about__card">
							<FiAward className="about__icon" />
							<h5>Experience</h5>
							<small>X years experience</small>
						</article>
					</div>

					<div className="about__content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum corporis odit perferendis libero cum nesciunt? Cum nesciunt blanditiis voluptates explicabo inventore magni quia quasi, voluptate modi corporis possimus. Rem.</p>
					</div>


					<a href="#contact" className="btn btn-primary">Let's talk</a>

				</div>

			</div>
		</section>

	)
}

export default About