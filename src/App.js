import { useState } from "react";
import MainBio from "./components/MainBio";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PorgrolioGrid from "./components/PortfolioGrid";
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import './styles/root.css'

function App() {

  const [view, setView ] = useState(()=> {
    return document.location.hash.slice(1);
  });


  return (
    <>
      <Navbar view={view} setView={setView} />
      <Banner/>
      <main>
        { ( view === "about-me" || view === "" || view === "all" ) && <MainBio /> }
        { ( view === "portfolio" || view === "" || view === "all" ) && <PorgrolioGrid /> }
        { ( view === "contact" || view === "" || view === "all" ) && <Contact /> }
        { ( view === "resume" || view === "" || view === "all" ) && <Resume /> }
      </main>
      <Footer />
    </>
  );
}

export default App;
