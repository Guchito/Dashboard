import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardTopItems from './Cards/DashboardTopItem'
import LastProduct from './Cards/DashboardLeftItem'
import DashboardContainer from './Componentcitos/DashboardConteiner'
import DashboardRightItem from "./Cards/DashboardRightItem";


function Dashboard(){
    const [users, setUsers] = useState([])
    const [count, setCount] = useState()
    useEffect(()=>{
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => {
            setCount(data.meta.count)
            setUsers(data.data.users)
        })
        
    },[])

    

    return(
        <div className="container-fluid">	

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

					
            <div className="row">
                <DashboardTopItems title="Products in Data Base" amount="135" icon="primary"/>

                <DashboardTopItems title="Amount in products" amount="$546.456" icon="success"/>
                
                <DashboardTopItems title="Users quantity" amount= {count} icon="warning" />
            </div>

			<Router>
                <div className="row">
                    <DashboardContainer title="Last product in Data Base">
                        <LastProduct 
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?"
                            detail="View product detail"
                        />
                    </DashboardContainer>

                    <DashboardContainer title="Categories in Data Base">
                        <div className="card-body">
                            <div className="row">
                                <DashboardRightItem category="Category 01" link='/'/>
                                <DashboardRightItem category="Category 02" link='/'/>
                                <DashboardRightItem category="Category 03" link='/'/>
                                <DashboardRightItem category="Category 04" link='/'/>
                                <DashboardRightItem category="Category 05" link='/'/>
                                <DashboardRightItem category="Category 06" link='/'/>
                                <DashboardRightItem category="Category 07" link='/'/>
                                <DashboardRightItem category="Category 08" link='/'/>
                            </div>
                        </div>
                    </DashboardContainer>		
                </div>
            </Router>		
        </div>
    )
}

export default Dashboard;