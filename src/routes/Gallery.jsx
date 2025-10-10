import Card from "../components/Card.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const Gallery = () => {
  // tu peux automatiser la génération plus tard
  const ids = Array.from({ length: 13 }, (_, i) => i + 1)

  return (
    <div className="flex flex-col items-center w-full">
      <Header title="Galerie" />

      <main className="w-full md:max-w-7xl md:px-6 py-12">
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
