import '../styles/nav.css'

const Navbar = ({ view, setView }) => {
  return (
    <header className="navbar navbar-dark">
      <div className="container-fluid">
        <a onClick={() => setView("all")} className="navbar-brand" href="#">
          <h1>Chris Kimball</h1>
        </a>
        <nav>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-3">
          <li className="nav-item">
            <a onClick={() => setView("about-me")} className="nav-link active" aria-current="page" href="#about-me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => setView("portfolio")} className="nav-link active" aria-current="page" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => setView("contact")} className="nav-link active" aria-current="page" href="#contact">
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => setView("resume")} className="nav-link active" aria-current="page" href="#resume">
              Resume
            </a>
          </li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
