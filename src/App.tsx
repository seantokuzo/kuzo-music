import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { useAppContext } from './context/appContext'
import { Home, Listen, Watch, Contact, NotFound } from './pages'

function App() {
  const { darkMode, changeWindowSize } = useAppContext()

  // TRACK WINDOW SIZE AND FIX SHITTY MOBILE VIEWPORT HEIGHT
  useEffect(() => {
    // SET vh CSS variable
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // DEFINE LISTENER
    const resizeListener = () => {
      changeWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      const vhNew = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vhNew}px`)
    }
    // ADD LISTENER
    window.addEventListener('resize', resizeListener)
    // CLEANUP LISTENER
    return () => window.removeEventListener('resize', resizeListener)
    // eslint-disable-next-line
  }, [])

  return (
    <main
      className={`w-full min-h-screen flex flex-col justify-center items-center ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
