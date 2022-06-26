import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import HeaderSocials from './components/header/HeaderSocials'
import SideEmail from './components/header/SideEmail'


function App() {

	return (

		<div className="App">
			<Header />
			<About />
			<Nav />
			<Skills />
			<Portfolio />
			<Contact />
			< HeaderSocials />
			< SideEmail />
		</div>
	);
}

export default App;
