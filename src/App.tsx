import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { Home, Listen, Watch, Contact, NotFound } from "./pages"

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center border-2 border-red">
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
