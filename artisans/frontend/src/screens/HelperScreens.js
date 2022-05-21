import React,{useState, useEffect }from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col ,Image, ListGroup, Card,Form,Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import {listHelperDetails,createHelperReview} from '../actions/helperActions'
import {HELPER_CREATE_REVIEW_RESET} from '../constants/helperConstants'

const HelperScreens = ({history,match}) => {
    const [rating,setRating]= useState(0)
    const [comment,setComment]= useState('')

    const dispatch= useDispatch()
    const helperDetails=useSelector(state=>state.helperDetails)
    const {loading,error,helper}=helperDetails 

    const userLogin= useSelector(state=> state.userLogin)
    const {userInfo}=userLogin

    const helperReviewCreate= useSelector(state=> state.helperReviewCreate)
    const {success:successHelperReview,error:errorHelperReview}=helperReviewCreate

    useEffect(()=>{
        if(successHelperReview){
            alert('Review Submitted')
            setRating(0)
            setComment('')
            dispatch({type:HELPER_CREATE_REVIEW_RESET})
        }
       dispatch(listHelperDetails(match.params.id))
    }, [dispatch,match,successHelperReview])

    const submitHandler= (e) =>{
        e.preventDefault()
        dispatch(createHelperReview(match.params.id,{
            rating,
            comment
        }))
    }


    return (
        <>
           <Link className="btn btn-dark my-3" to="/helpers">
               Go Back
           </Link>
           {loading?(<Loader />): error? (<Message varaint='danger'>{error}</Message>): (
            <>
            <Meta title={helper.name} />
            <Row>
               <Col md={6}>
                 <Image className="img-screens"src={helper.image} alt={helper.name} fluid/>
               </Col>
               <Col md={3}>
                  <ListGroup variant='flush'>
                   <ListGroup.Item>
                       <h2>{helper.name}</h2>
                   </ListGroup.Item>
                   <ListGroup.Item>
                     <Rating value={helper.rating} text={`${helper.numReviews} reviews `} />
                 </ListGroup.Item>
                 <ListGroup.Item>
                  <h3> Provides Services as:   {helper.occupation_type}</h3>
                 </ListGroup.Item>
                 <ListGroup.Item>
                   Description:  {helper.description}
                 </ListGroup.Item>
                  </ListGroup>
               </Col>
               <Col md={3}>
                   <Card>
                       <ListGroup variant='flush'>
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                      <h4>Place:</h4>
                                   </Col>
                               </Row>
                           </ListGroup.Item> 
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                       {helper.place}
                                   </Col>      
                               </Row>
                           </ListGroup.Item>  
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                      <h4>For Services:</h4>
                                   </Col>
                               </Row>
                           </ListGroup.Item> 
                           <ListGroup.Item>
                               <Row>
                                   <Col>
                                       {helper.contact}
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
                   {helper.reviews.length===0 && <Message>No Reviews</Message>} 
                   <ListGroup variant='flush'>
                      {helper.reviews.map(review => (
                          <ListGroup.Item key={review._id}>
                             <strong>{review.name}</strong>
                             <Rating value={review.rating} />
                             <p>{review.createdAt.substring(0,10)}</p>
                             <p>{review.comment}</p>
                          </ListGroup.Item>
                      ))}
                      <ListGroup.Item>
                          <h2>Write a Customer Review</h2>
                          {errorHelperReview && <Message variant='danger'>{errorHelperReview}</Message>}
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

export default HelperScreens
