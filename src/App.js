import React,{useState} from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  const [movies, setMovies] = useState(
    [{
        title:"Squid Game",
        description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits.", 
        posterURL:"/squidGame.jpg", 
        rating:5
    },
    {
        title:"Ride Along 2",
        description:"Before Ben can marry James's sister, the two Atlanta cops must head to Miami to help the local police bring down a brutal drug dealer.",
        posterURL:"/rideAlong.jpg", 
        rating:4
    },
    {
        title:"Lucifer", 
        description:"To save their beach, elite lifeguard Mitch Buchannon and a former Olympian probe a criminal plot that threatens the future of the bay.", 
        posterURL:"/lucifer.jpg", 
        rating:3
    }]
)

const [input, setInput] = useState('');
const [ratingg, setRatingg] = useState(1);


const add=(newMovie)=>{
  setMovies([...movies, newMovie]);
}

  return (
    <div>
      
      <Filter input={input}  setInput={setInput} ratingg={ratingg}setRatingg={setRatingg} />
      <MovieList movies={movies}  input={input} ratingg={ratingg} />
      <MovieCard add={add}/>
            
    </div>
 
  );
}

export default App;
