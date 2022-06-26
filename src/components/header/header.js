import React from 'react'
import './header.css'
import CTA from './CTA'
import guts from '../../assets/guts.jpg'
import ParticleBackground from '../particleBackground/ParticleBackground'


const Header = () => {
	return (
		<header>
			<ParticleBackground />

			<div className="container header__container">
				
				<h5>Hi my name is</h5>
				<h1>Michael Chen</h1>
				<h1>I create things on the internet</h1>
				<h5 className="text-light">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m look.</h5>
				<CTA />


				<div className="me">
					<img src={guts} alt="struggler" />
				</div>


			</div>
		</header>
	)
}

export default Header