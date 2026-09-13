import Scene from './canvas/Scene'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import WorkExperience from './components/workExperience/WorkExperience'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      {/* Persistent 3D canvas (behind all content) */}
      <Scene />

      {/* Noise texture overlay for depth */}
      <div className="noise-overlay" />

      {/* HTML content above canvas */}
      <div className="app-wrapper">
        <Header />
        <Nav />
        <About />
        <WorkExperience />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
