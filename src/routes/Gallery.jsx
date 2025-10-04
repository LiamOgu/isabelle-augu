import Card from '../components/Card.jsx'
import Header from '../components/Header.jsx'

const Gallery = () => {
  return (
    <div className="flex flex-col items-center"> 
      <Header title="Galerie" />
      <div className="w-2/3 grid grid-cols-4 p-10">
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
      </div>
    </div>
  )
}

export default Gallery