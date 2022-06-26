import React from 'react'

const PortfolioItem = ({ image, githubLink, demoLink, paragraph }) => {

	return (
		<article className="portfolio__item">
			<div className="portfolio__item-image"></div>
			<img src={image} alt="" />
			<h3>This is a portfolio item title</h3>
			<div className="portfolio__item-cta">
				<a href={githubLink} target="_blank ">Github</a>
				<a href={demoLink} target="_blank">Live Demo</a>
			</div>
			<p>{paragraph}</p>
		</article>
	)
}

export default PortfolioItem