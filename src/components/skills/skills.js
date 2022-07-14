import React from 'react'
import './skills.css'
import { FaHtml5, FaCss3Alt, FaNode } from 'react-icons/fa'
import { SiJavascript, SiGithub, SiAdobe, SiMongodb } from 'react-icons/si'
import { IoLogoReact } from 'react-icons/io5'
import { DiGit, DiTerminal, DiBootstrap } from 'react-icons/di'
import { CgFigma } from 'react-icons/cg'

//skill icons to use
// HTML, CSS, Javascript, React, Express Git, Github, MongoDB, Command Line, VS Code, Figma, Adobe Suite
const Skills = () => {
	return (
		<section id="experience">
			<h2>My Toolbox</h2>
			<div className="container skills__container">

				<div className="tool">
					<FaHtml5 className="logo" />
					<p>HTML5</p>
				</div>

				<div className="tool">
					<FaCss3Alt className="logo" />
					<p>CSS3</p>
				</div>

				<div className="tool">
					<SiJavascript className="logo" />
					<p>Javascript</p>
				</div>

				<div className="tool">
					<FaNode className="logo" />
					<p>Node.js</p>
				</div>

				<div className="tool">
					<SiMongodb className="logo" />
					<p>MongoDB</p>
				</div>

				<div className="tool">
					<IoLogoReact className="logo" />
					<p>React</p>
				</div>

				<div className="tool">
					<DiGit className="logo" />
					<p>Git</p>
				</div>

				<div className="tool">
					<SiGithub className="logo" />
					<p>Github</p>
				</div>

				<div className="tool">
					<DiTerminal className="logo" />
					<p>Terminal</p>
				</div>

				<div className="tool">
					<CgFigma className="logo" />
					<p>Figma</p>
				</div>

				<div className="tool">
					<DiBootstrap className="logo" />
					<p>Bootstrap</p>
				</div>

				<div className="tool">
					<SiAdobe className="logo" />
					<p>Adobe</p>
				</div>
			</div>
		</section>

	)
}

export default Skills