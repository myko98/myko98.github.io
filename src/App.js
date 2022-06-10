import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="App">
			<Header />
			<Nav />
			<About />
			<Experience />
			<Skills />
			<Portfolio />
			<Contact />
    </div>
  );
}

export default App;
