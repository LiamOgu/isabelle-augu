import { motion } from "motion/react"

const HomeMainSection = () => {
  return (
    <motion.main className="w-full md:w-8/10 flex justify-center items-center"
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
      transition={{ duration: 0.5 }}
    >
      <figure className="w-full h-full lg:w-3/5 relative max-w-3xl">
        <img
          src="/imageAccueil.webp"
          className="w-full h-full"
          alt="Image d'accueil, tableau intutilé Envolée, acrylique sur toile coton, 150x50 cm. (3 toiles)"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </motion.main>
  )
}

export default HomeMainSection