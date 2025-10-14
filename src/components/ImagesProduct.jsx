import data from "../data/galleryData.js"


const Images = ({ id, imageType, className = "", onClick }) => {
  const image = data.imagesGallery.find(img => img.id === id)
  if (!image) return null

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className={`w-full h-auto object-contain ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      />
    </div>
  )
}

export default Images
