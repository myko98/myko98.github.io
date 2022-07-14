import React from 'react'

const PortfolioItem = ({ githubLink, demoLink, paragraph, title, tech }) => {

	return (
		<article className="portfolio__item">
			<div className="portfolio__item-image"></div>
			<h3>{title}</h3>
			<p>{paragraph}</p>
			<div className="portfolio__item-cta">
				{tech.map((item) => (
					<p className="tech">{item}</p>
				))}
			</div>

			<div className="portfolio__item-cta">
				<a href={githubLink} target="_blank ">Github</a>
				<a href={demoLink} target="_blank">Live Demo</a>
			</div>
			
		</article>
	)
}

export default PortfolioItem