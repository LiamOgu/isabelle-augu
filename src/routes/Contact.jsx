import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import ContactForm from "../components/ContactForm.jsx"
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - Isabelle Augu</title>
        <meta name="description" content="Contactez Isabelle Augu pour toute demande d'information ou de collaboration." />
      </Helmet>
      <Header title="Contact" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact