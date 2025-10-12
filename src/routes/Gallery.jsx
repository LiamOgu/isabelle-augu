import Card from "../components/Card.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { Helmet } from "react-helmet";
import data from "../data.js"

const Gallery = () => {
  // tu peux automatiser la génération plus tard
  const ids = Array.from({ length: data.imagesGallery.length }, (_, i) => i + 1)

  return (
    <div className="flex flex-col min-h-screen items-center w-full">
      <Helmet>
        <title>Galerie - Isabelle Augu</title>
        <meta name="description" content="Découvrez la galerie d'œuvres d'Isabelle Augu." />
      </Helmet>
      <Header title="galerie" />

      <main className="w-full md:max-w-7xl md:px-6 py-12 flex-grow">
        <div
          className="
            grid 
            gap-6 
            md:grid-cols-3 
            lg:grid-cols-4 
            place-items-center
          "
        >
          {ids.slice().reverse().map(id => (
            <Card key={id} id={id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery
