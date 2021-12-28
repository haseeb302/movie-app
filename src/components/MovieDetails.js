import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

import Actor from './Actor';

const MovieDetails = () => {

    let params = useParams();
    let id = params.movieId;

    const [movie, setMovieDetail] = useState('');
    const [cast, setCast] = useState('');
    const [crew, setCrew] = useState('');

    useEffect(() => {
        if(id)
        {
            axios.get(`${process.env.REACT_APP_API_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((res) => {
                console.log(res);     
                setMovieDetail(res.data);                   
            }) 
    
            axios.get(`${process.env.REACT_APP_API_URL}movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((res) => {
                console.log(res.data.cast);            
                console.log(res.data.crew);
                setCast(res.data.cast);
                setCrew(res.data.crew);
            })
        }
        // 
    }, [])

    return (

        <Container maxWidth="lg">
            <div>
                <Grid container mt={5}>                
                    <Grid item sm={4}>
                        <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />                                
                    </Grid>   
                    <Grid item sm={8} mt={8}>
                        <Box>
                            <Typography variant="h3">
                                {movie.original_title}
                            </Typography>
                        </Box>

                        <Box mt={5}>
                            <Typography paragraph>
                                {movie.overview}
                            </Typography>    
                        </Box>

                        <Rating name="read-only" value={3} readOnly/>    
                    </Grid>                                                         
                </Grid>

                <Box mt={5}>
                    <Typography variant="h3">Cast & Crew</Typography>               
                </Box>
                <Divider />
                <Grid container mt={2}>
                    {cast && cast.slice(0, 10).map((castMember) => (<Grid item sm><Actor key={castMember.id} item={castMember}/></Grid>))}
                    {crew && crew.slice(10, 20).map((crewMember) => (<Actor key={crewMember.id} item={crewMember}/>))}                 
                </Grid>                
            </div>            
        </Container > 
    )
}

export default MovieDetails;