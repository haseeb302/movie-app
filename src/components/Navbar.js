import { NavLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar disableGutters sx={{ justifyContent: "center" }}>
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                >
                <a href="/" style={{ color: "white", textDecoration: "none" }}>Movie App</a>
                </Typography>
            </Toolbar>         
        </AppBar>
    )
}

export { Navbar };