import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Actor = ({item}) => {
    
    return (
        <>
            <Box sx={{ maxWidth: 500, margin: "5px", position: "relative"}} className="movie-thumbnail">
                <img src={`http://image.tmdb.org/t/p/w154/${item.profile_path}`}/>    
                <Typography variant="h6">{item?.name || item?.original_name}</Typography>    
            </Box>
        </>
    )
}

export default Actor;