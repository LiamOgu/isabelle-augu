import data from "../data.json"

const Photos = ({ id, className = "" }) => {
  const photos = data?.photos || []

  let filteredPhotos = photos

  if (id) {
    if (Array.isArray(id)) {
      // tableau d'ids → garder uniquement ceux qui matchent
      filteredPhotos = photos.filter(photo => id.includes(photo.id))
    } else {
      // id unique
      filteredPhotos = photos.filter(photo => photo.id === id)
    }
  }

  return (
    <div className={`flex items-center justify-center py-10 ${className}`}>
      {filteredPhotos.map(photo => (
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          className="w-50 md:w-60 lg:w-65 md:mb-10"
        />
      ))}
    </div>
  )
}

export default Photos