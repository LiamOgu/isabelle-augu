import Footer from "../components/Footer.jsx"
import { Helmet } from "react-helmet";

const Actuality = () => {
  return (
    <div>Actuality
      <Helmet>
        <title>Actualités - Isabelle Augu</title>
        <meta name="description" content="Découvrez les dernières actualités d'Isabelle Augu." />
      </Helmet>
      <Footer />
    </div>
  )
}

export default Actuality