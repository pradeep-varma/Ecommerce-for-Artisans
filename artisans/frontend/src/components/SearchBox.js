import React, {useState} from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'

 const SearchBox = ({history}) => {
    const [keyword,setKeyword]= useState('')

    const submitHandler= (e) =>{
        e.preventDefault()
        if(keyword.trim()){
             history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} inline>
            <Row>
            <Col>
            <Form.Control type='text' name='q' onChange={(e) =>setKeyword(e.target.value)} placeholder='Search Products...' className='py-0.715' style={{width:'300px'}}></Form.Control>
            </Col>
            <Col>
            <Button type='submit' variant='outline-success' className='p-0.715'>Search</Button>
            </Col>
            </Row>
        </Form>
    )
}

export default SearchBox