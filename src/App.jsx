import { Link } from "react-router-dom"
import Head from "./components/Head"
import Foot from "./components/Foot"
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* <Head /> */}
        <div className="flex flex-col items-center">
          <h1>Lets use routing</h1>
          <div className="flex gap-x-5">
            <Link to={"/about"}>About Me</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/projects"}>Projects</Link>
          </div>
        </div>
        {/* <Foot/> */}
      </div>
    </>
  )
}

export default App
