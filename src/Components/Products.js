import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DashboardContainer from './Conteiners/DashboardConteiner'
import Product from './Cards/DashboardLeftItem'


function Users(){

    const [products, setProducts] = useState([]);
    const [ currentPage, setCurrentPage]= useState('http://localhost:3000/api/products?page=1')
    const [ nextPage, setNextPage]= useState(null);

    useEffect(() => {

        fetch(currentPage)
            .then((res)=> res.json())
            .then((data)=>{
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
                <h1 className="h3 mb-0 text-gray-800">Products</h1>
            </div>

            <div className="row">

            {products.map((product, i)=> 
                <DashboardContainer title={product.name}>
                    <Product 
                        description={product.detail}
                        img={product.imgUrl}
                        detail={`http://localhost:3000/productos/detail/${product.id}`}
                    />
                </DashboardContainer>
            )}
            <div className="col-lg-6 mb-4">
                <Link to='/' onClick={ (e)=> changeCurrentPage(nextPage ? nextPage : 'http://localhost:3000/api/products?page=1', e) } aria-label="Next">
                    <div className="shadow m-0 font-weight-bold text-primary">
                        <div className="card-header py-3">
                            <div>Next</div>
                        </div>
                    </div>
                </Link>
            </div>


            </div>
        
        
        
        
        
        
        
        </>
    )


    
}

export default Users;