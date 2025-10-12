import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import ContactForm from "../components/ContactForm.jsx"
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Contact - Isabelle Augu</title>
        <meta name="description" content="Contactez Isabelle Augu pour toute demande d'information ou de collaboration." />
      </Helmet>
      <Header title="contact" />
      <div className="flex-grow">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Contact