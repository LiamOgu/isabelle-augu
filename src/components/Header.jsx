import Navbar from './Navbar.jsx'

const Header = (props) => {
  return (
    <div className="w-full">
      <div id="homePage" className="flex justify-center items-center flex-col">
        <header className="w-full flex flex-col gap-9 py-14 items-center">
          <h1 className="text-5xl py-3">{props.title}</h1>
          <Navbar/>
        </header>
      </div>
    </div>
  )
}

export default Header