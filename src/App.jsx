import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CountryPage from "./pages/CountryPage"
import "./App.css"


function App () {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/country" element={<CountryPage/>}/>
    </Routes>


  )
}

export default App;
