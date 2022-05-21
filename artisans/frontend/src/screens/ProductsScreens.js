import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import ProductCarousel from '../components/ProductCarousel'
import {listProducts} from '../actions/productActions'
const ProductsScreens = ({match}) => {
 
    const keyword=match.params.keyword

  

    const dispatch = useDispatch()
    const productList= useSelector(state=>state.productList)
    const {loading,error,products}= productList 

    useEffect(()=>{
        dispatch(listProducts(keyword))
    }, [dispatch,keyword])

    
    return (
        <>
        {!keyword ? <ProductCarousel />: <Link to='/products'className='btn btn-dark'>Go Back</Link>}
            <br />
            <h1 style={{textAlign:'center'}}> Our Latest Products</h1>
            {loading? (<Loader />):error?(<Message variant='danger'>{error}</Message>): 
            (
            <>
            <Meta title='Products' />
              <Row>
                {products.map(product =>(
                     <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                         <Product product={product} />
                     </Col>
                 ))}
              </Row>
            </>
            )}
             
        </>
    )
}

export default ProductsScreens
