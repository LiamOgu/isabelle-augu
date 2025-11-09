import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import data from "../data/galleryData.js";
import Images from "../components/ImagesProduct.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Helmet } from "react-helmet";

const Product = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const product = data["imagesGallery"].find(product => product.title === title)

  useEffect(() => {
    window.scrollTo(0, 150)
  }, [])

  if (!product) return <div>Produit non trouvé.</div>

  const slides = [
    { src: product.src, alt: product.alt },
    ...product.subImages.map((s) => ({ src: s.src, alt: s.alt })),
  ]

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Helmet>
        <title>{product.title} - Isabelle Augu</title>
        <meta name="description" content="Découvrez l'œuvre d'Isabelle Augu." />
      </Helmet>
      <Header title="Isabelle Augu" />
      <h2 className="text-4xl mb-4 md:hidden font-family-primary font-bold">{product.title}</h2>
      <div className="w-11/12 md:w-2/3 flex flex-col md:flex-row flex-grow">
        <div className="flex flex-col gap-5 p-6 md:w-2/3">
          {/* Image principale */}
          <Images id={product.id} imageType="gallery" className="w-full overflow-hidden" onClick={() => { setIndex(0); setOpen(true) }} />
          {/* Sous-images */}
          <div className="flex flex-wrap gap-3">
            {product["subImages"].map((sub, idx) => (
              <div
                key={idx}
                className="cursor-pointer overflow-hidden w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] flex-shrink-0"
                onClick={() => { setIndex(idx + 1); setOpen(true) }}
              >
                <img src={sub.src} alt={sub.alt} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6 md:w-2/5">
          {/* Informations produit */}
          <h2 className="hidden md:block md:text-4xl mb-4 font-family-primary font-bold">{product.title}</h2>
          <p className="mb-4 font-extralight">{product.description}</p>
          <p className="mb-4">{product.date}</p>
          <p className="mb-4">{product.dimensions}</p>
          <p className="mb-4">{product.technique}</p>
        </div>
      </div>
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
      <Footer />
    </div>
  )
}

export default Product
