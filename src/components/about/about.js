import React from 'react'
import './about.css'
import { FiAward } from 'react-icons/fi'
import guts from '../../assets/guts.jpg'
import headshot from '../../assets/headshot.jpg'

const About = () => {
	return (
		<section id="about">
			<h2>About me</h2>


			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={headshot} alt="" />
					</div>
				</div>

				<div className="about_container">
					{/* need to rethink what to put on these cards */}
					{/* <div className="about__cards">
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
					</div> */}

					<div className="about__content">
						<p> I'm a recent graduate from the University of Waterloo with a Bachelor of Mathematical Economics. After trying out a bunch of business roles I realized that I wanted to do something more creative and stimulating. I rediscovered my love for programming during COVID and here I am. I am currently doing an accelerated CS degree at Carleton University.</p>
						<p> Other than coding, I spend my time doing calisthenics, whipping up new healthy recipes and hanging out with my two cats. </p>
					</div>
					<a href="#contact" className="btn btn-primary">Let's talk</a>

				</div>

			</div>
		</section >

	)
}

export default About