import portfolioItems from "../data/portfolio.json";
// TODO: Add in other porfolio item information in data/portfolio.json (link, image, description etc.)
// TODO: Format cards
const PorgrolioGrid = () => {
  return (
    <section className="bg-primary">
      <div className="container p-3">
        <div className="row g-3">
          {portfolioItems.map(({ id, title, url, image, description }) => (
            <div key={id} className="col-lg-6">
              <div className="card h-100">
                <img src={image} className="card-img-top" alt={`A sample image of the ${title}`} />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text"> {description}</p>
                </div>
                <div className="card-footer text-end">
                  <a href={url} className="btn btn-primary" target="_blank">
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorgrolioGrid;
