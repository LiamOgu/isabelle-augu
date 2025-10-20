import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import HomeMainSection from "../components/HomeMainSection.jsx";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Isabelle Augu</title>
        <meta name="description" content="Bienvenue sur mon site, découvrez mes œuvres et mes actualités." />
      </Helmet>
      <div id="homePage" className="flex justify-center items-center flex-col mb-12 flex-grow">
        <Header title="isabelle augu" textColor="text-purple-900" />
        <HomeMainSection />
      </div >
      <Footer />
    </div >
  )
}

export default Home