import React from 'react'
import './portfolio.css'
import PortfolioItem from './portfolioItem'
import guts from '../../assets/guts.jpg'

const portfolioProjects = [
	{
		image: { guts },
		githubLink: "https://github.com/",
		demolink: "https://google.com",
		paragraph: "hi this is working"
	},
	{
		image: { guts },
		githubLink: "https://github.com/",
		demolink: "https://google.com",
		paragraph: "hi this is working"
	},
	{
		image: { guts },
		githubLink: "https://github.com/",
		demolink: "https://google.com",
		paragraph: "hi this is working"
	},

]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{portfolioProjects.map((project) => (
					<PortfolioItem
					image={project.image.guts}
					githubLink={project.githubLink}
					demolink={project.demolink}
					paragraph={project.paragraph}
				/>
				))}
			</div>
	
		</section>

	)
}

export default Portfolio

