import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import data from "../data.json"
import Images from "../components/Images"
import Header from "../components/Header.jsx"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Product = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const product = data["imagesGallery"].find(product => product.title === title)



  if (!product) return <div>Produit non trouvé.</div>

  const slides = [
    { src: product.src, alt: product.alt },
    ...product.subImages.map((s) => ({ src: s.src, alt: s.alt })),
  ]

  return (
    <div className="flex flex-col items-center">
        <Header title="Isabelle Augu" />
      <h2 className="text-3xl mb-4 md:hidden">{product.title}</h2>
      <div className="w-11/12 md:w-2/3 flex flex-col md:flex-row">
        <div className="flex flex-col gap-5 p-6 md:w-2/3">
          {/* Image principale */}
          <Images id={product.id} imageType="gallery" className="w-full overflow-hidden" onClick={() => { setIndex(0); setOpen(true) }} />
          {/* Sous-images */}
          <div className="flex flex-wrap">
            {product["subImages"].map((sub, idx) => (
              <div
                key={idx}
                className="m-2 aspect-[4/3] w-[100px] lg:w-[150px] flex-shrink-0 overflow-hidden cursor-pointer"
                onClick={() => { setIndex(idx + 1); setOpen(true) }}
              >
                <img src={sub.src} alt={sub.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
  <div className="flex flex-col gap-4 p-6 md:w-2/5">
          {/* Informations produit */}
          <h2 className="hidden md:block md:text-3xl mb-4">{product.title}</h2>
          <p className="mb-4">Date : {product.date}</p>
          <p className="mb-4">Dimensions : {product.dimensions}</p>
          <p className="mb-4">Technique : {product.technique}</p>
          <p className="mb-4">Description : {product.description}</p>
        </div>
      </div>
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
    </div>
  )
}

export default Product
