import { Link } from "react-router-dom";


function DashboardRightItem({name, amount, link}){
    return(
        <div className="col-lg-6 mb-4">
            <Link to={link}>
                <div className="card bg-info text-white shadow">
                    <div className="card-body category-body">
                        <div>{name}</div>
                        <div>{amount}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DashboardRightItem;