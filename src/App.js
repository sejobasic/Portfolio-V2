import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Design from './components/Design'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import './styling/App.css'

function App() {
  return (
    <div className="wrapper">
      <div className='main-container'>
        <Cursor />
        <Navbar />
        <Header />
        <Projects />
        <Design />
        <Contact />
      </div>
    </div>
  )
}

export default App
