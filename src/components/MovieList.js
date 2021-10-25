import React from 'react';
import {Card} from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating'

function MovieList({movies,input,ratingg}) {
   
    return (
        <div className="listMovies">
            {movies
            .filter((el) => (el.title.toLowerCase().includes(input)) && (el.rating>=ratingg) )
            .map((movie, index) => (
                <div className="movie">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.posterURL} />
                    <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text><b> Description:</b><br/>{movie.description}</Card.Text>
                    <RatingView ratingValue={movie.rating} size={14} />
                    </Card.Body>
                    </Card>
                </div>                
            ))}
        </div>
    )
}

export default MovieList;
