import { useState } from "react"
import { NavLink } from "react-router-dom"
import data from "../data.js"
import { motion } from "motion/react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const Card = ({ id }) => {
  const product = data["imagesGallery"].find(product => product.id === id)
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      className="flex flex-col gap-3 p-3 max-w-fit max-h-fit"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <NavLink to={`/Product?title=${product.title}`} className="">
        <div className="flex items-center justify-center aspect-[1/1] w-full max-w-[250px] overflow-hidden mb-2 bg-gray-100">
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
                width="100%"
                height="auto"
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
