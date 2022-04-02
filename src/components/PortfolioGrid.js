const portfolioItem = [
    {
        id: 1,
        title: "Item 1"
    },
    {
        id: 2,
        title: "Item 2"
    },
    {
        id: 3,
        title: "Item 3"
    },
    {
        id: 4,
        title: "Item 4"
    }
]

const PorgrolioGrid = () => {
    return (
        <section className="bg-primary">
            <div className="container p-3">
                <div className="row g-3">
                    {portfolioItem.map((item)=> (
                        <div key={item.id} className="col-md-6">
                            <div className="card card-body">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default PorgrolioGrid;