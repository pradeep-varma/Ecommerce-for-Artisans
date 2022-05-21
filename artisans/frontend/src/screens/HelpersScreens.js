import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col} from 'react-bootstrap'
import Helper from '../components/Helper'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {listHelpers} from '../actions/helperActions'

const HelpersScreens = () => {
    const dispatch= useDispatch()
    const helperList=useSelector(state=>state.helperList)
    const {loading,error,helpers}= helperList

    useEffect(()=>{
        dispatch(listHelpers())
    }, [dispatch])
    return (
        <>
            <h1> Our Associated FreeLancers and Part-Timers</h1>
            <h4>Opting local delivers the best customer service.</h4>
            {loading? (<Loader />): error?(<Message variant='danger'>{error}</Message>):(
               <>
               <Meta title='Services' />
                <Row>
                 {helpers.map(helper =>(
                     <Col key={helper._id} sm={12} md={6} lg={4} xl={3}>
                         <Helper helper={helper} />
                     </Col>
                 ))}
            </Row>
            </>
            )}
        </>
    )
}

export default HelpersScreens