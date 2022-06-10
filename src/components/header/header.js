import React from 'react'
import './header.css'
import CTA from './CTA'
import guts from '../../assets/guts.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hi my name is</h5>
				<h1>Michael</h1>
				<h5 className="text-light">Fullstack Developer</h5>
				<CTA />

				< HeaderSocials />

				<div className="me">
					<img src={guts} alt="struggler" />
				</div>

				<a href="#contact" className="scroll__down">Scroll Down</a>
			</div>
		</header>
	)
}

export default Header