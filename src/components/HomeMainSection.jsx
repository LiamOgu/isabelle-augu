import data from "../data.js";
const HomeMainSection = () => {
  const imageAccueil = data.imagesAccueil[0];
  return (
    <main className="w-full md:w-8/10 flex justify-center items-center">
      <figure className="w-full h-full lg:w-3/5 relative">
        <img src={imageAccueil.src} className="w-full h-full" alt={imageAccueil.alt} />
      </figure>
    </main>
  )
}

export default HomeMainSection