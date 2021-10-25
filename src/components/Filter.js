import React from 'react';
import {Form, FormControl, FormGroup } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

function Filter({input,setInput,setRatingg,ratingg}) {
    
    const handleRating = (rate) => {
        setRatingg(rate)
    }
   
    return (
        <div >
            <Form >
            
                <FormGroup className="filter_form">                   
                    <FormControl  type="text" placeholder="search movies" value={input} onChange={(event) => (setInput(event.target.value.toLowerCase()))}></FormControl>{" "}
                    <Rating onClick={handleRating} ratingValue={ratingg}/>
                </FormGroup>
                
            </Form>
            
        </div>
    )
}

export default Filter
