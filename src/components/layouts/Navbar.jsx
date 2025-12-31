

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import port from  '../../assets/contact/Portfolio.jpg'

export default function Navbar() {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <img src={port} style={{margin: '10px'}}></img>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Madhu's Portfolio
        </Typography>
     
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/resume">Resume</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}