import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import { Helmet } from "react-helmet";

const Actuality = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Actualités - Isabelle Augu</title>
        <meta name="description" content="Découvrez les dernières actualités d'Isabelle Augu." />
      </Helmet>
      <Header title="actualités" />
      <div className="flex-grow" />
      <Footer />
    </div>
  )
}

export default Actuality