import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

function MovieCard({add}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [name3, setName3] = useState('');
    
    const handleAdd=() =>{add({
        title:name,
        description:name1,
        posterURL:name2, 
        rating:name3
    })}
    
    return (
        <div className="but">
        <Button variant="primary" onClick={handleShow}>
        Add Movies
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add your favorite Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <div>
                    <label className="input">Title:</label>
                    <input type="text" value={name} onChange={(event) => (setName(event.target.value))}/>
                </div>     
                <div>
                    <label className="input">Description:</label>
                    <input type="text" value={name1} onChange={(event) => (setName1(event.target.value))}/>
                </div>          
                <div>
                    <label className="input">PosterURL:</label>
                    <input type="text" value={name2} onChange={(event) => (setName2(event.target.value))}/>
                </div>
               
                <div>
                    <label className="input">Rating:</label>
                    <input type="text" value={name3} onChange={(event) => (setName3(event.target.value))}/>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleAdd} >
            Add Movie
        </Button>
        </Modal.Footer>
        </Modal>
                
        </div>
    )
}

export default MovieCard
