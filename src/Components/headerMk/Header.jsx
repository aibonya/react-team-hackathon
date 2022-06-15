import React, { useContext, useState } from "react";
import { headerContext } from "../../contexts/headerContext";
import { styled, alpha } from "@mui/material/styles";
import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import AccountCircle from "@mui/icons-material/AccountCircle";
import navmenu from "./images/navmenu.png";
import { Link, useNavigate } from "react-router-dom";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "./Header.css";


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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function handleClick(){
    navigate('/add-movies');
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
      <MenuItem onClick={handleMenuClose}>Profile </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem ><AddPhotoAlternateIcon onClick={handleClick}/></MenuItem>
      <MenuItem>
        <Badge badgeContent={17} color="error">Notification</Badge>
      </MenuItem>
    </Menu>
  );


  return (
    <Box className="tool-bar">
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
            <Typography className="header-text text" fontWeight={400}>
              HOME
            </Typography>
          </Box>
          <Box className="header-box">
            <Typography className="header-text text" fontWeight={400}>
              MOVIES
            </Typography>
          </Box>
          <Box className="header-box">
            <Typography className="header-text text" fontWeight={400}>
              SERIES
            </Typography>
          </Box>
          <Box className="header-box">
            <Typography className="header-text text" fontWeight={400}>
              SOON
            </Typography>
          </Box>
        </Box>
        <Box style={{ display: "flex" }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle className='acc-icon' sx={{ fontSize: 45 }} />
          </IconButton>
        </Box>

        {renderMenu}
      </Box>
    </Box>
  );
}