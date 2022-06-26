import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'


const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href="https://linkedin.com" target="__blank">< BsLinkedin /></a>
			<a href="https://github.com" target="__blank">< BsGithub /></a>
			<a href="https://twitter.com" target="__blank">< BsTwitter /></a>
			<a href="https://www.linkedin.com/in/michael-lu-chen/" target="__blank">< FaLinkedinIn /></a>
		</div>
	)
}

export default HeaderSocials
