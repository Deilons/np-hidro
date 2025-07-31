import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Equipment from "./components/Equipment"
import Supplies from "./components/Supplies"
import CostSimulator from "./components/CostSimulator"
import Branches from "./components/Branches"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Equipment />
      <Supplies />
      <CostSimulator />
      <Branches />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

