import data from "../data.json"

const Images = ({ id, imageType, className = "" }) => {
  // mapping imageType → tableau correspondant
  const imageMap = {
    gallery: data?.["imagesGallery"] || [],
    about: data?.["imagesAbout"] || []
  }

  const imagesToUse = imageMap[imageType] || []

  const image = imagesToUse.find(img => img.id === id)
  if (!image) return null

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto object-contain"
      />
    </div>
  )
}

export default Images
