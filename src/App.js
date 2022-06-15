// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Intro from "./components/layout/Intro";
import Footer from "./components/layout/Footer";
import WhyChoose from "./components/layout/WhyChoose";
function App() {
  return (
   <>
   <Navbar/>
   <Intro/>
   <WhyChoose/>
   <Footer/>
   </>
  );
}

export default App;
