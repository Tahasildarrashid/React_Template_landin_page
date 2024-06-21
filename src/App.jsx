import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
    <>
        <Navbar/>
        <main>
            <div className="cards">
              <Card title="card 1" description="1"/>
              <Card title="card 2" description="2"/>
              <Card title="card 3" description="3"/>
              <Card title="card 4" description="4"/>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default App
