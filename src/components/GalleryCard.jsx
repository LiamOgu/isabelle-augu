import Images from "./Images.jsx"
import { NavLink } from "react-router-dom"
import data from "../data.js";
import { motion } from "motion/react"

const Card = ({ id }) => {
  const product = data["imagesGallery"].find(product => product.id === id)
  return (
    <motion.div className="flex flex-col gap-3 p-3 max-w-fit max-h-fit"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink to={`/Product?title=${product.title}`} className="">
        <div className="flex items-center justify-center aspect-[1/1] w-full max-w-[250px] overflow-hidden mb-2">
          <figure className="w-full h-full">
            <img src={product.src} alt={product.alt} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
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