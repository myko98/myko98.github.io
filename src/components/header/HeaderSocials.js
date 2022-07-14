import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn, FaDiscord } from 'react-icons/fa'


const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href="https://github.com/myko98" target="__blank">< BsGithub /></a>
			<a href="https://www.linkedin.com/in/michael-lu-chen/" target="__blank">< FaLinkedinIn /></a>
			<a href="https://discord.com/users/279667737964576778" target="__blank">< FaDiscord /></a>
			{/* <a href="https://twitter.com" target="__blank">< BsTwitter /></a>	 */}
		</div>
	)
}

export default HeaderSocials
