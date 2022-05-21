import React ,{useState} from 'react'
import {Form,Button, Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Meta from '../components/Meta'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {savePaymentMethod} from '../actions/cartActions'
 
const PaymentScreens = ({history}) => {

      const cart= useSelector(state => state.cart)
      const {shippingAddress}= cart 

      if(!shippingAddress){
          history.push('/shipping')
      }

      const [paymentMethod,setPaymentMethod]= useState('PayPal')
    
      const dispatch= useDispatch()

      const submitHandler= (e) =>{
          e.preventDefault()
          dispatch(savePaymentMethod(paymentMethod))
          history.push('/placeorder') 
      }

    return (
        <>
        <Meta title='Select Payment' />
        <FormContainer>
         <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <br /> <br />
                <Col>
                    <Form.Check type='radio' label='PayPal or Credit Card' id='PayPal' name='paymentMethod' value='PayPal' 
                    checked onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check>
                   <br />
                  {/*  <Form.Check type='radio' label='GooglePay' id='GooglePay' name='paymentMethod' value='GooglePay'  onChange={(e)=>setPaymentMethod(e.target.value)}></Form.Check> */}
                </Col>
                </Form.Group>
                <br />
                <Button type='submit' variant='primary'>Continue</Button> 
            </Form>
        </FormContainer>
        </>
    )
}

export default PaymentScreens
