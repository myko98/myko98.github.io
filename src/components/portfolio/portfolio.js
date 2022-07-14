import React from 'react'
import './portfolio.css'
import PortfolioItem from './portfolioItem'
import guts from '../../assets/guts.jpg'
import resize2 from '../../assets/resize2.png'

const portfolioProjects = [
	{
		title: "Find My Workout",
		githubLink: "https://github.com/myko98/findMyWorkout",
		demoLink: "https://find-my-workout.netlify.app/",
		paragraph: "Uses the ExerciseDB API to provide users with exercises that target a specific body part",
		tech: ["React", "Material UI", "ExerciseDB API"]
	},
	{
		title: "Beer Store Inventory",
		githubLink: "https://github.com/myko98/beerStore",
		demoLink: "https://beerstorefridge.herokuapp.com/",
		paragraph: "Allows new employees find beer information as well as provide a live inventory management tracker",
		tech: ["React", "MongoDB"]
	},
	{
		title: "Uniqlo Shopping Cart Clone",
		githubLink: "https://github.com/myko98/shopping-cart",
		demoLink: "https://uniqlo-sc.netlify.app/",
		paragraph: "A mock up ecommerce site to practice fundamental React concepts",
		tech: ["React", "React-Router", "Bootstrap"]
	},
	{
		title: "Memory Card Game",
		githubLink: "https://github.com/myko98/memoryCard",
		demoLink: "https://memory-card-ppta.netlify.app/",
		paragraph: "Users try to click every card only once. Cards are based off my favourite anime - Ping Pong the Animation",
		tech: ["React", "HTML", "CSS"]
	}

]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{portfolioProjects.map((project) => (
					<PortfolioItem
						githubLink={project.githubLink}
						demoLink={project.demoLink}
						paragraph={project.paragraph}
						title={project.title}
						tech={project.tech}
					/>
				))}
			</div>

		</section>

	)
}

export default Portfolio

