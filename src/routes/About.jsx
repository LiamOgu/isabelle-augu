import Navbar from "../components/Navbar"
import Images from "../components/Images.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const aboutSections = [
  {
    text: "Je m’appelle Isabelle Augu, je suis née en 1972 à Auch dans le Gers (France).",
    imageId: 1
  },
  {
    text: `J’arrive à Toulouse en 1993 étudiante en
                finance et comptabilité.
                Après 10 ans d’activité en tant que
                gérante associée d’une société dans le
                domaine du bâtiment, j’amorce un premier
                virage dans ma carrière, je me forme et m’installe
                en tant que décoratrice d’intérieur, je crée des
                ambiances, des décors, pour des particuliers et
                des professionnels (restaurants). Pendant ces années,
                je vais également créer des luminaires pour mes
                clients, j’aurai la chance d’apparaitre dans le magazine
                Elle Décoration de Juin 2014 pour une collection
                d’appliques vendues chez Serendipity à Paris et
                Terra Rosa à Toulouse.`,
    imageId: null
  },
  {
    text: `Puis je cesse mon activité de décoratrice, prends du temps pour moi.`,
    imageId: 3
  },
  {
    text: `En juin 2023, je commence à peindre à l’acrylique.
              Depuis toujours, je fabrique, bricole, crée, imagine.
              j’aime la créativité !!!`,
    imageId: null
  },
  {
    text: `Aujourd’hui, j’ai 53 ans, et je peins, en autodidacte,
              j’apprends en faisant, je suis très curieuse,
              un peu boulimique, envie de tout. Je ne me limite pas à un style, je reste ouverte, me laisse porter par mes
              inspirations. Chaque projet est une découverte,
              une nouvelle technique, de belles couleurs, ma seule
              limite c’est moi même. j’adore les nouvelles expériences,
              ça me challenge et me fais me sentir pleine de vie.`,
    imageId: 4
  },
  {
    text: `Quand je commence une toile, le point de départ
              peut être une couleur, un mot, une technique,
              une envie, une musique … Puis, je me laisse porter,
              la toile peut être réalisée en quelques jours,
              ou en plusieurs mois, le temps que l’inspiration
              me donne la suite.`,
    imageId: null
  },
  {
    text: `Ce que j’aime à travers mon activité, c’est créer,
              découvrir, tester, peindre, broder, coller, découper,
              coudre, tisser … c’est sans limite et pourtant
              je vois bien que je suis encore très timide.
              Parfois, j’apprends à déborder et d’autre fois,
              j’apprends la précision, j’ai beaucoup à faire
              dans un sens comme dans l’autre !
              L’expérience ne fait que commencer.`,
    imageId: 5
  },
  {
    text: `À suivre...`,
    imageId: null
  }
]

const About = () => {
  return (
    <div id="homePage" className="flex flex-col items-center">
      <Header title="À propos de moi" />

      <main className="flex flex-col md:flex-row justify-center w-8/10 py-10 gap-12">
        {/* Texte + images mobiles */}
        <div className="flex flex-col gap-12 md:w-6/10 lg:w-5/10 lg:gap-20">
          {aboutSections.map((section, index) => (
            <div key={index} className="lg:flex lg:items-center lg:gap-8">
              <p className="leading-relaxed mb-12">{section.text}</p>
              {section.imageId && <Images id={section.imageId} imageType="about" className="md:hidden" />}
            </div>
          ))}
        </div>

        {/* Colonne d’images sur desktop */}
        <div className="hidden md:flex flex-col justify-between items-stretch w-4/10">
          <Images id={1} imageType="about" className="w-50 md:w-60 lg:w-65" />
          <Images id={2} imageType="about" className="w-50 md:w-60 lg:w-65"/>
          <Images id={3} imageType="about" className="w-50 md:w-60 lg:w-65"/>
          <Images id={4} imageType="about" className="w-50 md:w-60 lg:w-65"/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
