import data from "../data.json"

const images = ({ id, imageType, className = "" }) => {
  const imagesGallery = data?.["images-gallery"] || []
  const imagesAbout = data?.["images-about"] || []
  // choisir les bonnes images selon le contexte
  const imagesToUse = imageType === "about" ? imagesAbout : imagesGallery

  // filtrer les images selon l’id ou les ids passés en props

  let filteredImages = imagesToUse

  if (id) {
    if (Array.isArray(id)) {
      // tableau d'ids → garder uniquement ceux qui matchent
      filteredImages = imagesToUse.filter(image => id.includes(image.id))
    } else {
      // id unique
      filteredImages = imagesToUse.filter(image => image.id === id)
    }
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {filteredImages.map(image => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="w-50 md:w-65 xl:w-70"
        />
      ))}
    </div>
  )
}

export default images