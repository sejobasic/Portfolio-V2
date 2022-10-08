import Footer from './components/Footer'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Design from './components/Design'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import './styling/App.css'

function App() {
  return (
    <>
      <Cursor />
      <div className='wrapper' id='home'>
        <div className='main-container'>
          <Navbar />
          <Header />
          <Projects />
          <Design />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
