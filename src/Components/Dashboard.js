import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardTopItems from './Cards/DashboardTopItem'
import LastProduct from './Cards/DashboardLeftItem'
import DashboardContainer from './Conteiners/DashboardConteiner'
import DashboardRightItem from "./Cards/DashboardRightItem";


function Dashboard(){
    const [users, setUsers] = useState([])
    const [countUsers, setCountUsers] = useState()
    useEffect(()=>{
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => {
            setCountUsers(data.meta.count)
            setUsers(data.data.users)
        })
        
    },[])

    const [products, setProducts] = useState([]);
    const [countProducts, setCountProducts] = useState();
    const [lastProduct, setLastProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [amountCategories, setAmountCategories] = useState();
    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data =>{
            setProducts(data.data.products);
            setCountProducts(data.meta.count);
            setLastProduct(data.meta.lastProduct);
            setTotalPrice(data.meta.totalPrice);
            setAmountCategories(data.meta.amountCategories);
            setCategories(data.meta.categories);
        })
    },[])


    

    return(
        <div className="container-fluid">	

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

					
            <div className="row">
                <DashboardTopItems title="Products in Data Base" amount={countProducts} icon="fas fa-clipboard-list" color="primary"/>

                <DashboardTopItems title="Amount in products" amount={`$${totalPrice}`} icon="fas fa-dollar-sign" color="success"/>
                
                <DashboardTopItems title="Users quantity" amount= {countUsers} icon="fas fa-user" color="warning" />

                <DashboardTopItems title="Amount of categories" amount= {amountCategories} icon="fas fa-clipboard-list" color="primary" />

            </div>

			<Router>
                <div className="row">
                    <DashboardContainer title={lastProduct.name}>
                        <LastProduct 
                            description={lastProduct.detail}
                            img={lastProduct.imgUrl}
                            detail={`http://localhost:3000/productos/detail/${lastProduct.id}`}
                        />
                    </DashboardContainer>

                    <DashboardContainer title="Categories in Data Base">
                        <div className="card-body">
                            <div className="row">
                                {categories.map((category, i)=> <DashboardRightItem name={category[0].name} amount={category[0].amount} link='/'/> )}
                            </div>
                        </div>
                    </DashboardContainer>		
                    <DashboardContainer title="Product list">
                        <div className="card-body">
                            <div className="row">
                                {products.map((product, i)=> <DashboardRightItem name={product.name} link='/'/> )}
                            </div>
                        </div>
                    </DashboardContainer>
                </div>
            </Router>		
        </div>
    )
}

export default Dashboard;