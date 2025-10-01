import Navbar from "../components/Navbar"
import Photos from "../components/Photos"

const About = () => {
  return (
    <div id="homePage" className="flex justify-center items-center flex-col">
        <header className="w-full flex flex-col gap-10 py-14 items-center">
          <h1 className="text-5xl py-3">À propos de moi</h1>
          <Navbar/>
        </header>
        <hr className="w-full border-x border-gray-300" />
        <main className="w-full flex justify-center lg:w-8/10">
          <div className="flex flex-col items-center justify-center md:gap-24 py-10 md:w-6/10 lg:mx-24 ">
            <div className="lg:flex">
              <p className="mb-24">
                Je m’appelle Isabelle Augu,
                je suis née en 1972 à Auch dans
                le Gers (France).
              </p>
              <Photos id={1} className="md:hidden" />
            </div>
            <div className="lg:flex">
              <p className="">
                J’arrive à Toulouse en 1993 étudiante en
                finance et comptabilité.
                Après 10 ans d’activité en tant que
                gérante associée d’une société dans le
                domaine du bâtiment, j’amorce un premier
                virage dans ma carrière, je me forme et m’installe
                en tant que décoratrice d’intérieur, je crée des
                ambiances, des décors, pour des particuliers et
                des professionnels (restaurants). Pendant ces années,
                je vais également créer des luminaires pour mes
                clients, j’aurai la chance d’apparaitre dans le magazine
                Elle Décoration de Juin 2014 pour une collection
                d’appliques vendues chez Serendipity à Paris et
                Terra Rosa à Toulouse.
              </p>
            </div>
            <div className="lg:flex">
              <p className="">
                Puis je cesse mon activité de décoratrice,
                prends du temps pour moi.
              </p>
              <Photos id={3} className="md:hidden" />
            </div>
            <div className="lg:flex">
              <p className="">
              En juin 2023, je commence à peindre à l’acrylique.
              Depuis toujours, je fabrique, bricole, crée, imagine.
              j’aime la créativité !!!
              </p>
            </div>
            <div className="lg:flex">
              <p className="">
              Aujourd’hui, j’ai 53 ans, et je peins, en autodidacte,
              j’apprends en faisant, je suis très curieuse,
              un peu boulimique, envie de tout. Je ne me limite pas à un style, je reste ouverte, me laisse porter par mes
              inspirations. Chaque projet est une découverte,
              une nouvelle technique, de belles couleurs, ma seule
              limite c’est moi même. j’adore les nouvelles expériences,
              ça me challenge et me fais me sentir pleine de vie.
              </p>
              <Photos id={4} className="md:hidden" />
            </div>
            <div className="lg:flex">
              <p className="">
              Quand je commence une toile, le point de départ
              peut être une couleur, un mot, une technique,
              une envie, une musique … Puis, je me laisse porter,
              la toile peut être réalisée en quelques jours,
              ou en plusieurs mois, le temps que l’inspiration
              me donne la suite.
              </p>
            </div>
            <div className="lg:flex">
              <p className="">
              Ce que j’aime à travers mon activité, c’est créer,
              découvrir, tester, peindre, broder, coller, découper,
              coudre, tisser … c’est sans limite et pourtant
              je vois bien que je suis encore très timide.
              Parfois, j’apprends à déborder et d’autre fois,
              j’apprends la précision, j’ai beaucoup à faire
              dans un sens comme dans l’autre !
              L’expérience ne fait que commencer.
              </p>
              <Photos id={5} className="md:hidden" />
            </div>
            <div className="lg:flex">
              <p className="">
              A suivre …
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col w-5/10 items-center justify-around ">
            <Photos id={[1, 3, 4, 5]} className=" flex flex-col items-stretch my-0" />
          </div>
        </main>
      </div>
  )
}

export default About