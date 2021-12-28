import { useState, useEffect } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import Movies from "./Movies";

const Trending = () => {

    const [trendingMovies, setTrendingMovies] = useState('');
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=a348815fad96877ddb9be8d0fea4e23b`)
        .then((res) => {
            console.log(res);
            setTrendingMovies(res.data.results);
        })        
    }, [])

    return (
        <Grid container spacing={2} mt={10}>
            <Container>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {trendingMovies && 
                    trendingMovies.map((trendingMovie) => (
                        <Movies 
                            key={trendingMovie.id} 
                            movie={trendingMovie}
                        />
                    ))}            
                </Box>                        
            </Container>
        </Grid>
    )
}

export default Trending;