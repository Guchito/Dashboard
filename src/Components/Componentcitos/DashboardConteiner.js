

function DashboardContainer({children, title}){
    return (
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
            </div>

            {children}
            
        </div>
    </div>
    )
}
export default DashboardContainer;