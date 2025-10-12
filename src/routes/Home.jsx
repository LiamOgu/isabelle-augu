import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Accueil - Isabelle Augu</title>
        <meta name="description" content="Bienvenue sur la page d'accueil de mon site, découvrez nos services et actualités." />
      </Helmet>
      <div id="homePage" className="flex justify-center items-center flex-col mb-12 flex-grow">
        <Header title="isabelle augu" textColor="text-purple-900" />
        <main className="w-full md:w-8/10">
          <div className="flex justify-center items-center w-full h-150">
            Image en attente
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home