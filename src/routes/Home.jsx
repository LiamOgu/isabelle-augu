import { Link } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Header from "../components/Header.jsx"

const Home = () => {
  return (
    <div className="">
      <div id="homePage" className="flex justify-center items-center flex-col">
        <Header title="Isabelle Augu" />
        <main className="md:w-8/10">
          <div className="flex justify-center items-center w-full h-150 bg-amber-100">
            Image en attente
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home