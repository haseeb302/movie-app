import { useState, useEffect } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import Movies from "./Movies";

const Popular = () => {

    const [popularMovies, setPopularMovies] = useState('');    


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res) => {
            console.log(res);
            setPopularMovies(res.data.results);
        })

        
    }, [])

    return (

        <Grid container spacing={2} mt={10}>
            <Container>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {popularMovies && 
                    popularMovies.map((popularMovie) => (
                        <Movies 
                            key={popularMovie.id} 
                            movie={popularMovie}
                        />
                    ))}            
                </Box>                        
            </Container>
        </Grid>
    )
}

export default Popular;