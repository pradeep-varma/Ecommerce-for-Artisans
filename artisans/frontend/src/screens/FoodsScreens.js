import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col} from 'react-bootstrap'
import Food from '../components/Food'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {listFoods} from '../actions/foodActions'

const FoodsScreens = () => {
    const dispatch= useDispatch()
    const foodList=useSelector(state=>state.foodList)
    const {loading,error,foods}= foodList

    useEffect(()=>{
        dispatch(listFoods())
    }, [dispatch])
    return (
        <>
            <h1>Promoting Associated Local Foods</h1>
            <h4>Opting local Food means healthier and more tasty food options.</h4>
            {loading? (<Loader />): error?(<Message variant='danger'>{error}</Message>):(
               <>
               <Meta title='Foods' />
                <Row>
                 {foods.map(food =>(
                     <Col key={food._id} sm={12} md={6} lg={4} xl={3}>
                         <Food food={food} />
                     </Col>
                 ))}
            </Row>
            </>
            )}      
        </>
    )
}

export default FoodsScreens