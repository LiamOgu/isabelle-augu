import claire from "./assets/images/clairetest.webp"

function App() {
  return (
    <div>
      <div id="homePage" className="flex justify-center items-center flex-col text-primary-blue">
        <header className="w-full flex flex-col gap-9 py-14 items-center">
          <h1 className="text-5xl py-3">Isabelle Augu</h1>
          <nav className="w-7/10">
            <ul className="flex justify-between">
              <li>accueil</li>
              <li>à propos</li>
              <li>oeuvres</li>
              <li>actualités</li>
              <li>contact</li>
            </ul>
          </nav>
        </header>
        <main className="w-8/10">
          <img src={claire} alt="Isabelle Augu" />
        </main>
      </div>
    </div>
  )
}

export default App
