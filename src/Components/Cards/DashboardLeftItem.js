function LastProduct({description, detail, img}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{height: '25rem'}} src={img} alt="last product" />
            </div>
            <p>{description}</p>
            <a target="_blank" rel="nofollow" href={detail}> View product detail </a>
        </div>
    )
}

export default LastProduct;