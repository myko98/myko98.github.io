import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href="https://linkedin.com">< BsLinkedin /></a>
			<a href="https://github.com">< BsGithub /></a>
			<a href="https://twitter.com">< BsTwitter /></a>
		</div>
	)
}

export default HeaderSocials
