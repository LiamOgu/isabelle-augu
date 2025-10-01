import claire from "../assets/images/clairetest.webp"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Header from "../components/Header.jsx"

const Home = () => {
  return (
    <div className="">
      <div id="homePage" className="flex justify-center items-center flex-col">
        <Header title="Isabelle Augu" />
        <main className="w-8/10">
          <img src={claire} alt="Isabelle Augu" />
        </main>
      </div>
    </div>
  )
}

export default Home