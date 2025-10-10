import { Link } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <div className="">
      <div id="homePage" className="flex justify-center items-center flex-col mb-12">
        <Header title="Isabelle Augu" />
        <main className="md:w-8/10">
          <div className="flex justify-center items-center w-full h-150 bg-amber-100">
            Image en attente
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home