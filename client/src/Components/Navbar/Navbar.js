import React, { useEffect, useState } from 'react';
import useStyle from "./styles";
import Memories from "../images/memories.png";
import {Typography,AppBar, Toolbar, Avatar, Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useNavigate,useLocation} from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();

  const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log("user",user);
  useEffect(() => {
    const token = user?.token;

    // JWT ...

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () =>{
      dispatch({type:"LOGOUT"});
      navigate("/");
      setUser(null);
  }

  const classes = useStyle();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography variant="h2" component={Link} to="/" className={classes.heading} align="center">Memories</Typography>
        <img src={Memories} className={classes.image} alt="Memories" height={"60"} />
        </div>

        <Toolbar className={classes.toolbar}>
           {user ? (
              <div className={classes.profile} > 
                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                  <Button className={classes.logout}  variant='contained' onClick={logout}>Logout</Button>
              </div>
           ):(
                <Button component={Link} to="/auth" variant='contained' color='primary'>
                    Sign in
                </Button> 
           )}
        </Toolbar>
      </AppBar>
  )
}
