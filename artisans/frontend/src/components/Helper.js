import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
const Helper = ({helper}) => {
    return (
        <Card className="my-3 p-3 rounded">
        <Link to={`/helper/${helper._id}`}>
            <Card.Img className="img-Change"src={helper.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/helper/${helper._id}`}>
            <Card.Title as='div'>
                <strong>{helper.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={helper.rating} text={`${helper.numReviews} reviews`} />
        </Card.Text>  
        <Card.Text as="div">
            {helper.occupation_type}
        </Card.Text>
        <Card.Text as="div">
         <strong>Contact:</strong> {helper.contact}
        </Card.Text>
        </Card.Body>

        </Card>
    )
}

export default Helper;
