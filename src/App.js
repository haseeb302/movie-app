import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Movies from './components/Movies';
import './App.css';

function App() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Grid container direction="column" alignItems="center">
      <Box mt={10}> 
        <NavLink to="/trending" className="custom-link" activeClassName="active" exact="true">Trendings</NavLink>  
        <NavLink to="/popular" className="custom-link" activeClassName="active" exact="true">Popular</NavLink>      
        <NavLink to="/search" className="custom-link" activeClassName="active" exact="true">Search</NavLink>
      </Box>
      <Outlet />
    </Grid> 
    </>
  );
}

export default App;
