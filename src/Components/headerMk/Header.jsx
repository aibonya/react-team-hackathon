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
import AccountCircle from "@mui/icons-material/AccountCircle";
import navmenu from "./images/navmenu.png";
import { useNavigate} from "react-router-dom";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { authContext } from "../../contexts/authContext";
import LoginIcon from '@mui/icons-material/Login';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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
        <>
        <MenuItem onClick={handleClick} ><AddPhotoAlternateIcon/> Add movies</MenuItem>
        <MenuItem onClick={() => navigate(`/add-series`)} >Add series</MenuItem></>
      ) : null}
      
      <MenuItem>
        <Badge badgeContent={17} color="error">Notification</Badge>
      </MenuItem>
    </Menu>
  );


  return (
    <Box className="tool-bar" width={'100%'}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          onClick={() => toggleSidebar()}
          style={{ height: "48px", display: "flex", alignItems: "center" }}
        >
          <img className="burger" src={navmenu} alt="" />
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
          <Box className="header-box">
            <Typography onClick={() => navigate(`/soon`)} className="header-text text" fontWeight={400}>
              SOON
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: "flex" }}>

            {user ? (<IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            className="acc-icon">
            <Avatar  src="https://cdn-icons-png.flaticon.com/512/147/147144.png" sx={{ fontSize: 45 }} />
          </IconButton>) : (<Button onClick={() => navigate(`/log-in`)}><LoginIcon /></Button>)}
            {/* {!user ? (<Button onClick={() => navigate(`/log-in`)}  fontWeight={400}>Login</Button>) : null} */}
        </Box>

        {renderMenu}
      </Box>
      {/* {console.log(user)} */}
    </Box>
  );
}