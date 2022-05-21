import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import {Carousel,Image} from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import {listTopProducts} from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch= useDispatch()
    const productTopRated= useSelector(state =>state.productTopRated )
    const {loading,error,products}= productTopRated

    useEffect(()=>{
        dispatch(listTopProducts())
    },[dispatch])

    return  loading? <Loader />: error? <Message variant='danger'>{error}</Message>: (
        <>
        <h1 style={{textAlign:'center'}}>Top Rated Products</h1>
        <br />
        <Carousel pause='hover' className='bg-dark' style={{textAlign:'center'}}>
            {products.map(product =>(
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image roundedCircle style={{height:'300px', padding:'30px', margin:'40px'}} src={product.image} alt={product.name} fluid />
                        <Carousel.Caption style={{position:'absolute',top:'0'}}>
                             <h2 style={{color:'#fff'}}>{product.name} (₹ {product.price})</h2>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
        </>
    )
}

export default ProductCarousel