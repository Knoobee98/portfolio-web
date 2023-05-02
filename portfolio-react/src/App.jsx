import About from "./components/about"
import Contact from "./components/contact"
import Portfolio from "./components/portfolio"

export default function App() {

  return (
    <>
        <div className="flex flex-col items-center">
          <div className="flex gap-5 justify-around mx-auto p-4">
            <div>Fauzan.</div>
            <div>
              <ul className="flex gap-4">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="min-h-screen">
              <About />
            </div>
            <div className="min-h-screen">
              <Portfolio />
            </div>
            <div className="min-h-screen">
              <Contact />
            </div>
          </div>
          <div className="flex justify-center h-[200px] w-screen bg-slate-200">
            footer
          </div>
        </div>
    </>
  )
}