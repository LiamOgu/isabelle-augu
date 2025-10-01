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
    <div className={` my-10 ${className}`}>
      {filteredPhotos.map(photo => (
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          className="w-5/10 md:w-5/10 lg:w-5/10 xl:w-5/10 mb-10"
        />
      ))}
    </div>
  )
}

export default Photos