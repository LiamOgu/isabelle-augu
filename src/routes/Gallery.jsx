import Card from '../components/Card.jsx'
import Header from '../components/Header.jsx'

const Gallery = () => {
  return (
    <div> 
      <Header title="Galerie" />
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center p-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Gallery