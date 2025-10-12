import data from "../data.js";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react"

const ActualityCard = ({ id }) => {
  const [open, setOpen] = useState(false)
  const imageActuality = data["imagesActuality"].find(product => product.id === id)
  return (
    <div>
      <div className="flex items-center justify-center aspect-[1/1] w-full max-w-[300px] cursor-pointer m-4" onClick={() => setOpen(true)}>
        <figure className="w-full h-full">
          <img src={imageActuality.src} alt={imageActuality.alt} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </figure>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: imageActuality.src, alt: imageActuality.alt }]}
      />
    </div>
  )
}

export default ActualityCard