import React,{ useEffect }from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col ,Image, ListGroup, Card } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listSellerDetails} from '../actions/productActions'

const SellerScreens = ({match}) => {
   const dispatch= useDispatch()
   const productDetails=useSelector(state=> state.productDetails)
   const {loading,error,product}=productDetails 
    useEffect(()=>{
        dispatch(listSellerDetails(match.params.id))
    }, [dispatch,match])
    return (
        <>
           <Link className="btn btn-dark my-3" to={`/product/${product._id}`}>
               MINIMIZE
           </Link>
           {loading?(<Loader />): error? (<Message varaint='danger'>{error}</Message>): (
            <Row>
               <Col md={6}>
                 <Image className="img-screens"src={product.sellerImage} alt={product.sellerName} fluid/>
               </Col>
               <Col md={3}>
                  <ListGroup variant='flush'>
                   <ListGroup.Item>
                       <h2>{product.sellerName}</h2>
                   </ListGroup.Item>
                 <ListGroup.Item>
                   Description:  {product.sellerDescription}
                 </ListGroup.Item>
                  </ListGroup>
               </Col>
               <Col md={3}>
                   <Card>
                       <ListGroup variant='flush'>
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                      <h4>Address</h4>
                                   </Col>
                               </Row>
                           </ListGroup.Item> 
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                       {product.sellerAddress}
                                   </Col>      
                               </Row>
                           </ListGroup.Item>  
                       </ListGroup>
                   </Card>
               </Col>
           </Row>
           )}
        </>
    )
}

export default SellerScreens
