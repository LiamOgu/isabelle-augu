const ContactForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="m-10 p-10 rounded-lg shadow-lg w-full text-center text-xl font-light bg-white dark:bg-gray-800">
        <p>Si vous avez besoin d'un renseignement vous pouvez me contacter par mail à l'adresse suivante : </p>
        <br />
        <a href="mailto:isabelleauguart@gmail.com" className="text-blue-500">isabelleauguart@gmail.com</a>
        <br />
        <br />
        <p>merci et à bientôt</p>
      </div>
    </div>
  )
}

export default ContactForm