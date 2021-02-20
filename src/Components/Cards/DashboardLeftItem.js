import { Link } from "react-router-dom";

function LastProduct({description, detail}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="images/product_dummy.svg" alt="image dummy" />
            </div>
            <p>{description}</p>
            <Link target="_blank" rel="nofollow" to="/">{detail}</Link>
        </div>
    )
}

export default LastProduct;