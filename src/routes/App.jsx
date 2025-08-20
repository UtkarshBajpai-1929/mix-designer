import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import OutputCard from "../components/OutputCard";


function App() {
  return (
    <div className="app-container">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
