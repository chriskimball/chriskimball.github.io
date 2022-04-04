import { useState } from "react";
import MainBio from "./components/MainBio";
import Navbar from "./components/Navbar";
import PorgrolioGrid from "./components/PortfolioGrid";
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

function App() {

  const [view, setView ] = useState(()=> {
    return document.location.hash.slice(1);
  });


  return (
    <>
      <Navbar view={view} setView={setView} />
      { ( view === "about-me" || view === "" || view === "all" ) && <MainBio /> }
      { ( view === "portfolio" || view === "all" ) && <PorgrolioGrid /> }
      { ( view === "contact" || view === "all" ) && <Contact /> }
      { ( view === "resume" || view === "all" ) && <Resume /> }
      <Footer />
    </>
  );
}

export default App;
