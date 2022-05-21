import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
const Food = ({food}) => {
    return (
        <Card className="my-3 p-3 rounded">
        <Link to={`/food/${food._id}`}>
            <Card.Img className="img-Change"src={food.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/food/${food._id}`}>
            <Card.Title as='div'>
                <strong>{food.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={food.rating} text={`${food.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="div">
           By: {food.owner}
        </Card.Text>
        <Card.Text as="div">
        At: {food.location}
        </Card.Text>
        </Card.Body>

        </Card>
    )
}

export default Food;
