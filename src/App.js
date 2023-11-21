import {BrowserRouter, Routes, Route, Link} from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Items from "./pages/Items";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./pages/components/NavBar";
import Contact from "./pages/Contact";


 

function App() {
  return (<BrowserRouter>
  <NavBar/>


    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/services" element= {<Services/>} />
      <Route path="/items" element= {<Items/>} />
      <Route path="/items/:id" element= {<Details/>} />
      <Route path="/items/:id" element= {<Details/>} />
      <Route path="*" element= {<ErrorPage/>} />

    </Routes>
    </BrowserRouter>)
    
    
  
}

export default App;
