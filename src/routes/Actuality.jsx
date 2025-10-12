import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import { Helmet } from "react-helmet";
import ActualityCard from "../components/ActualityCard.jsx"
import data from "../data.js";

const Actuality = () => {
  const imagesArray = Array.from({ length: data.imagesActuality.length }, (_, i) => i + 1)
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Actualités - Isabelle Augu</title>
        <meta name="description" content="Découvrez les dernières actualités d'Isabelle Augu." />
      </Helmet>
      <Header title="actualités" />
      <main className="flex-grow">
        <div
          className="
            grid 
            gap-6 
            md:grid-cols-3 
            lg:grid-cols-4 
            place-items-center
          "
        >
          {imagesArray.slice().reverse().map(id => (
            <ActualityCard key={id} id={id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Actuality