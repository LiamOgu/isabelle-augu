import { useSearchParams } from "react-router-dom"
import data from "../data.json"
import Images from "../components/Images"
import Header from "../components/Header.jsx"
import {initLightboxJS} from 'lightbox.js-react'

const Product = () => {
  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const product = data["imagesGallery"].find(product => product.title === title)

  useEffect(() => {
    initLightboxJS()
  }, [])


  if (!product) return <div>Produit non trouvé.</div>

  return (
    <div className="flex flex-col items-center">
        <Header title="Isabelle Augu" />
      <div className="w-11/12 md:w-2/3 flex flex-col md:flex-row">
        <div className="flex flex-col gap-5 p-6 md:w-2/3">
          {/* Image principale */}
          <Images id={product.id} imageType="gallery" className="w-full overflow-hidden" />
          {/* Sous-images */}
          <div className="flex flex-wrap">
            {product["subImages"].map((sub, idx) => (
              <div
                key={idx}
                className="m-2 aspect-[4/3] w-[150px] flex-shrink-0 overflow-hidden"
                style={{ flex: '0 0 auto' }}
              >
                <img src={sub.src} alt={sub.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
  <div className="flex flex-col gap-4 p-6 md:w-1/3">
          {/* Informations produit */}
          <h2 className="text-2xl mb-4">{product.title}</h2>
          <p className="mb-4">{product.date}</p>
          <p className="mb-4">{product.dimensions}</p>
          <p className="mb-4">{product.technique}</p>
          <p className="mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
