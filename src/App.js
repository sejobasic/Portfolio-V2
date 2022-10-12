import Footer from './components/Footer'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Design from './components/Design'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Loader from './components/Loader'
import './styling/App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
      <Cursor />
      {/* <Loader /> */}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  )
}

export default App
