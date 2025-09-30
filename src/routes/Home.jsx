import claire from "../assets/images/clairetest.webp"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"

const Home = () => {
  return (
    <div className="">
      <div id="homePage" className="flex justify-center items-center flex-col">
        <header className="w-full flex flex-col gap-9 py-14 items-center">
          <h1 className="text-5xl py-3">Isabelle Augu</h1>
          <Navbar/>
        </header>
        <main className="w-8/10">
          <img src={claire} alt="Isabelle Augu" />
        </main>
      </div>
    </div>
  )
}

export default Home