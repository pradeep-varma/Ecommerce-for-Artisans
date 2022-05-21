import React,{useState, useEffect }from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col ,Image, ListGroup, Card,Form,Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'
import Meta from '../components/Meta'
import {listFoodDetails,createFoodReview} from '../actions/foodActions'
import {FOOD_CREATE_REVIEW_RESET} from '../constants/foodConstants'
const FoodScreens = ({history,match}) => {

    const [rating,setRating]= useState(0)
    const [comment,setComment]= useState('')

    const dispatch= useDispatch()
   const foodDetails=useSelector(state=> state.foodDetails)
   const {loading,error,food}=foodDetails 

   const userLogin= useSelector(state=> state.userLogin)
   const {userInfo}=userLogin

   const foodReviewCreate= useSelector(state=> state.foodReviewCreate)
    const {success:successFoodReview,error:errorFoodReview}=foodReviewCreate

    useEffect(()=>{
        if(successFoodReview){
            alert('Review Submitted')
            setRating(0)
            setComment('')
            dispatch({type:FOOD_CREATE_REVIEW_RESET})
        }
        dispatch(listFoodDetails(match.params.id))
    }, [dispatch,match,successFoodReview])

    const submitHandler= (e) =>{
        e.preventDefault()
        dispatch(createFoodReview(match.params.id,{
            rating,
            comment
        }))
    }
    return (
        <>
           <Link className="btn btn-dark my-3" to="/foods">
               Go Back
           </Link>
           {loading?(<Loader />): error? (<Message varaint='danger'>{error}</Message>):(
           <>
           <Meta title={food.name} />
           <Row>
               <Col md={6}>
                 <Image className="img-screens"src={food.image} alt={food.name} fluid/>
               </Col>
               <Col md={3}>
                  <ListGroup variant='flush'>
                   <ListGroup.Item>
                       <h2>{food.name}</h2>
                   </ListGroup.Item>
                   <ListGroup.Item>
                     <Rating value={food.rating} text={`${food.numReviews} reviews `} />
                 </ListGroup.Item>
                 <ListGroup.Item>
                  <h3> By:     {food.owner}</h3>
                 </ListGroup.Item>
                 <ListGroup.Item>
                   Description:  {food.description}
                 </ListGroup.Item>
                  </ListGroup>
               </Col>
               <Col md={3}>
                   <Card>
                       <ListGroup variant='flush'>
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                      <h4>Location:</h4>
                                   </Col>
                               </Row>
                           </ListGroup.Item> 
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                       {food.location}
                                   </Col>      
                               </Row>
                           </ListGroup.Item>  
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                      <h4>For Contracts and Orders:</h4>
                                   </Col>
                               </Row>
                           </ListGroup.Item> 
                           <ListGroup.Item>
                               <Row>
                                <Col>
                                       {food.contact}
                                </Col>      
                               </Row>
                           </ListGroup.Item>  
                       </ListGroup>
                   </Card>
               </Col>
           </Row>
           <Row>
               <Col md={6}>
                   <h2>Reviews</h2>
                   {food.reviews.length===0 && <Message>No Reviews</Message>} 
                   <ListGroup variant='flush'>
                      {food.reviews.map(review => (
                          <ListGroup.Item key={review._id}>
                             <strong>{review.name}</strong>
                             <Rating value={review.rating} />
                             <p>{review.createdAt.substring(0,10)}</p>
                             <p>{review.comment}</p>
                          </ListGroup.Item>
                      ))}
                      <ListGroup.Item>
                          <h2>Write a Customer Review</h2>
                          {errorFoodReview && <Message variant='danger'>{errorFoodReview}</Message>}
                          {userInfo? (
                              <Form onSubmit={submitHandler}>
                                  <Form.Group controlId='rating'>
                                      <Form.Label>Rating</Form.Label>
                                      <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                          <option value=''>Select...</option>
                                          <option value='1'>1 - Poor</option>
                                          <option value='2'>2 - Fair</option>
                                          <option value='3'>3 - Good</option>
                                          <option value='4'>4 - Very Good</option>
                                          <option value='5'>5 - Excellent</option>
                                      </Form.Control>
                                  </Form.Group>
                                  <Form.Group controlId='comment'>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as='textarea' row='3' value={comment} onChange={(e) => setComment(e.target.value)}>
                                    </Form.Control>
                                  </Form.Group>
                                  <br />
                                  <Button type='submit' variant='primary'>
                                      Submit
                                  </Button>
                              </Form>
                          )
                          : <Message>Please <Link to='/login'>Sign In</Link> to post a Review</Message>}
                      </ListGroup.Item>
                   </ListGroup>
               </Col>
          </Row>
           </>
           )}
        </>
    )
}

export default FoodScreens
