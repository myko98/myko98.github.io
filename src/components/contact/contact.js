import React from 'react'
import './contact.css'
import missy from '../../assets/cat2.jpg'

const Contact = () => {
	return (
		<section id="contact">
			<h2>Get In Touch</h2>
			<div className="container contact">


				<p>I'm currently looking for any new opportunities within web development. 
				If you could envision us working together, please shoot me a message!
				If you just want to talk about cats, movies, fitness, my inbox is open as well :)
				</p>
				<img src={missy} alt="missy" className="missy"/>
				<a href="mailto:michaelluchen1998@gmail.com" className="btn btn-primary">Let's talk!</a>

			</div>

		</section>

	)
}

export default Contact