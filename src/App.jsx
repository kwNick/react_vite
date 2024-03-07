import Head from "./components/Head"

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Head />
        <div className="flex flex-col items-center">
          <h1>Lets use routing</h1>
          <div className="flex gap-x-5">
            <button>About Me</button>
            <button>Contact</button>
            <button>Projects</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
