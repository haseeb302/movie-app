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
        axios.get(`${process.env.REACT_APP_API_URL}trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
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