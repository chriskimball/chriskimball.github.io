import portfolioItems from "../data/portfolio.json";
import "../styles/portfolio.css";
const PorgrolioGrid = () => {
  return (
    <section id="work" className="main-container">
      <aside className="main-header">
        <h2>Work</h2>
      </aside>

      <article className="main-body">
        <div className="row g-3">
          {portfolioItems.map(({ id, title, url, repo, image, description }) => (
            <div key={id} className="col-lg-6">
              <div className="card h-100">
                <img src={image} className="card-img-top" alt={`A sample image of the ${title}`} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text"> {description}</p>
                </div>
                <div className="card-footer text-end">
                  <a href={repo} className="button mx-3" target="_blank" rel="noreferrer">
                    Github Repo
                  </a>
                  <a href={url} className="button" target="_blank" rel="noreferrer">
                    Deployed Application
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default PorgrolioGrid;
