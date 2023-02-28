import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center border-2 border-red">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Home />} />
        <Route path="/watch" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
