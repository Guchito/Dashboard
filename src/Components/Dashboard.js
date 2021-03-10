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

    const [ previousPage, setPreviousPage]= useState(null)
    const [ currentPage, setCurrentPage]= useState('http://localhost:3000/api/products?page=1')
    const [ nextPage, setNextPage]= useState(null)

    useEffect(()=>{
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data =>{
            setCountProducts(data.meta.count);
            setLastProduct(data.meta.lastProduct);
            setTotalPrice(data.meta.totalPrice);
            setAmountCategories(data.meta.amountCategories);
            setCategories(data.meta.categories);
        })
    },[])

    useEffect(() => {

        fetch(currentPage)
            .then((res)=> res.json())
            .then((data)=>{
                setPreviousPage(data.meta.previousPage)
                setCurrentPage(data.meta.currentPage)
                setNextPage(data.meta.nextPage)
                setProducts(data.data.products)
            })
    }, [currentPage] )

    const changeCurrentPage = (pageAddress, e) => {
        setCurrentPage(pageAddress)
        e.preventDefault()
    }


    

    return(
	
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

					
            <div className="row">
                <DashboardTopItems title="Products in Data Base" amount={countProducts} icon="fas fa-clipboard-list" color="primary"/>

                <DashboardTopItems title="Amount in products" amount={`$${totalPrice}`} icon="fas fa-dollar-sign" color="success"/>
                
                <DashboardTopItems title="Users quantity" amount= {countUsers} icon="fas fa-user" color="warning" />

                <DashboardTopItems title="Amount of categories" amount= {amountCategories} icon="fas fa-wine-glass-alt" color="danger" />

            </div>


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
                            <div className="col-lg-6 mb-4">
                                <Link to='/' onClick={ (e)=> changeCurrentPage(nextPage || 'http://localhost:3000/api/products?page=1', e) } aria-label="Next">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body category-body">
                                            <div>Next</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </DashboardContainer>
            </div>

            </>
    )
}

export default Dashboard;