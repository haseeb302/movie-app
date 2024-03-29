import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import '../styles/movie.css';

const Movies = ({ movie }) => {
    
    return (
        <>
        {movie.poster_path && <Box sx={{ maxWidth: 500, margin: "5px", position: "relative"}} className="movie-thumbnail"            
        >
            <img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}                
            />    
            <div className="movie-thumbnail_overlay">
                <p>Genre One</p>
                <p>Genre Two</p>
                <Link className="movie-thumbnail_button" to={`/movies/${movie.id}`}> 
                    View Details 
                </Link>                
            </div>
                
        </Box>}
        </>
    )
}

export default Movies;