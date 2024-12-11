import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Blogpost from "./components/Blogpost";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Errorpage from "./components/Errorpage";


function App() {

  return (
    <>
      <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="about/" element= {<About/>}/>
        <Route path="blog/" element= {<Blog/>}/>
        <Route path="blogpost/" element= {<Blogpost/>}/>
        <Route path="contact/" element= {<Contact/>}/>
        <Route path="element/" element= {<Navbar/>}/>
        <Route path="*" element= {<Errorpage/>}/>
       </Routes>
      </Router>
    </>
  )
}

export default App
