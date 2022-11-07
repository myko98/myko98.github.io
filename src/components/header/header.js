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

				<h1 >Hey there, it’s great to see you today.</h1>
				<h1 className="text-light">My name is <span className="white">Michael.</span></h1>
				{/* <h1 className="text-light">I <span className="white">create</span> things on the <span className="white">internet</span></h1> */}
				<br/>
				<h1 className="text-light">Currently, I'm a <span className="white">frontend developer</span> at <span className="white"><a href="https://cheffery.ca/" target="__blank">Cheffery</a></span>, a <span className="white">food startup</span> that's aiming to <span className="white">change</span> the way <span className="white">chefs interact with customers</span>.</h1>
				
				<h1 className="text-light">I’m looking to <span className="white">level up my career</span> with any <span className="white">frontend</span> or <span className="white">fullstack</span> opportunities. Lets <span className="white">connect</span> !! </h1>
				<CTA />
				{/* <div className="me">
					<img src={guts} alt="struggler" />
				</div> */}
			</div>
		</header>
	)
}

export default Header