import { useState, useEffect } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import Movies from "./Movies";

const Search = () => {

    const [query, setQuery] = useState('');
    const [movieData, setMovieData] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        if(query !== '' && query.length > 2)
        {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a348815fad96877ddb9be8d0fea4e23b&page=1&query=${query}`)
            .then((res) => {
                console.log(res);
                setMovieData(res.data.results);
            })
        }
    }, [query])

    return (
        <Box>
            {/* <h1>Search</h1> */}
            <Box mt={5}>
                <TextField type="text" variant="outlined" label="Search Movies" onChange={handleChange}/>
            </Box>
            <Grid container spacing={2} mt={10}>
                <Container>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {movieData && movieData.map((movieData) => (<Movies key={movieData.id} movie={movieData}/>))}          
                    </Box>                        
                </Container>
            </Grid>            
        </Box>
    )
}

export default Search;