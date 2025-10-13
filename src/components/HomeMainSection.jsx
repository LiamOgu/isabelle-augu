import data from "../data.js";
import { motion } from "motion/react"

const HomeMainSection = () => {
  const imageAccueil = data.imagesAccueil[0];
  return (
    <motion.main className="w-full md:w-8/10 flex justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="w-full h-full lg:w-3/5 relative">
        <img src={imageAccueil.src} className="w-full h-full" alt={imageAccueil.alt} />
      </figure>
    </motion.main>
  )
}

export default HomeMainSection