import { useSearchParams } from "react-router-dom"
import data from "../data.json"
import Images from "../components/Images"
import Header from "../components/Header.jsx"

const Product = () => {
  const [searchParams] = useSearchParams()
  const id = Number(searchParams.get("id"))
  const product = data["imagesGallery"].find(product => product.id === id)

  if (!product) return <div>Produit non trouvé.</div>

  return (
    <div className="flex flex-col items-center">
        <Header title="Isabelle Augu" />
      <div className="w-2/3 flex flex-col md:flex-row">
        <div className="flex flex-col gap-5 p-10">
          {/* Image principale */}
          <Images id={product.id} imageType="gallery" className="" />
          {/* Sous-images */}
          <div className="flex">
            {product["subImages"].map(sub => (
              <div key={sub.id} className="flex flex-col items-center m-2">
                <img src={sub.src} alt={sub.alt} className="w-30" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-10 md:w-1/2">
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
