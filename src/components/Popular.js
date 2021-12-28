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
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a348815fad96877ddb9be8d0fea4e23b&language=en-US&page=1`)
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