import React, { useContext, useState } from "react";
import { headerContext } from "../../contexts/headerContext";
import { styled, alpha } from "@mui/material/styles";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate} from "react-router-dom";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { authContext } from "../../contexts/authContext";
import LoginIcon from '@mui/icons-material/Login';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export default function Header() {
  const { toggleSidebar } = useContext(headerContext);
  const {user, logOut, admin} = useContext(authContext)
  // console.log(user)
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const navigate = useNavigate()


  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  function handleClick(){
    navigate('/add-movies');
    handleMenuClose()
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ? (<MenuItem onClick={handleMenuClose}>{user.email}</MenuItem>) : (<MenuItem onClick={() =>{handleMenuClose();  navigate(`/log-in`)}}>Login</MenuItem>)}
      {user ? (         
      <MenuItem onClick={() => {handleMenuClose(); logOut()}}>Log out</MenuItem>) : null}
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      {admin ? (
        <div>
        <MenuItem onClick={handleClick} >Add movies</MenuItem>
        <MenuItem onClick={() => {handleMenuClose(); navigate(`/add-series`)}} >Add series</MenuItem></div>
      ) : null}
    </Menu>
  );


  return (
    <Box className="tool-bar" width={'100%'} style={{display: 'flex', justifyContent: "center"}}>
      <Box
        className="tool-bar-child"
        style={{
          width: "1000px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box 
          className="burger-box"
          onClick={() => toggleSidebar()}
          style={{ display: "flex", alignItems: "center", marginRight: '40px' }}
        >
          <MenuRoundedIcon className='burger' style={{fontSize: '45px'}}/>
        </Box>
        <Box className="tengizText">
          <Typography
            className="tengizTyp"
            onClick={() => navigate(`/`)}
            noWrap
            style={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              fontSize: "1.25rem",
            }}
          >
            Tengiz Cinema
          </Typography>
        </Box>
        <Box
          style={{ width: "1000px", display: "flex", justifyContent: "center" }}
        >
          <Box className="header-box">
            <Typography onClick={() => navigate(`/`)} className="header-text text" fontWeight={400}>
              HOME
            </Typography>
          </Box>
          <Box className="header-box">
            <Typography onClick={() => navigate(`/movies`)} className="header-text text" fontWeight={400}>
              MOVIES
            </Typography>
          </Box>
          <Box className="header-box">
            <Typography onClick={() => navigate(`/series`)} className="header-text text" fontWeight={400}>
              SERIES
            </Typography>
          </Box>
        </Box>
        <Box style={{display: 'flex', alignItems: 'center'}}>
            <BookmarkIcon className='bookmark' onClick={() => navigate(`/cart`)} style={{ fontSize: '30px' }}/>
            {user ? (<IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit">
            <Avatar className="acc-icon" src="https://cdn-icons-png.flaticon.com/512/147/147144.png"  />
          </IconButton>) : (<Button onClick={() => navigate(`/log-in`)}><LoginIcon size="1rem" style={{color: 'white'}}/></Button>)}
        </Box>

        {renderMenu}
      </Box>
      {/* {console.log(user)} */}
    </Box>
  );
}