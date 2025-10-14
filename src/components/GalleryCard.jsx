import { useState } from "react"
import { NavLink } from "react-router-dom"
import data from "../data/galleryData.js"
import { motion } from "motion/react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Card = ({ id }) => {
  const product = data["imagesGallery"].find(product => product.id === id)
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      className="flex flex-col gap-3 p-3 w-[270px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <NavLink to={`/Product?title=${product.title}`}>
        <div className="relative aspect-[1/1] w-full overflow-hidden mb-2 bg-gray-200">
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%]"
              style={{ animation: "shimmer 1.5s infinite linear" }} />
          )}

          <figure className="w-full h-full">
            <motion.div
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={loaded ? { opacity: 1, filter: "blur(0)" } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <LazyLoadImage
                src={product.src}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                afterLoad={() => setLoaded(true)}
              />
            </motion.div>
          </figure>
        </div>

        <div className="text-2xl font-family-primary font-bold">
          {product.title}
        </div>
      </NavLink>
    </motion.div>
  )
}

export default Card
