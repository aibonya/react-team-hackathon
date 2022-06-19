import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { headerContext } from "../../contexts/headerContext";
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Sidebar = () => {
  const { sidebar, toggleSidebar} = useContext(headerContext);
  const navigate = useNavigate()
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar-container">
        <li onClick={() =>{toggleSidebar(); navigate(`/`)}}><HomeRoundedIcon />HOME</li>
        <li onClick={() =>{toggleSidebar(); navigate(`/movies`)}}><LocalMoviesIcon />MOVIES</li>
        <li onClick={() =>{toggleSidebar(); navigate(`/series`)}}><LiveTvIcon />SERIES</li>
        <li onClick={() =>{toggleSidebar(); navigate(`/cart`)}}><ShoppingCartRoundedIcon />CART</li>
        <li onClick={() =>{toggleSidebar(); navigate(`/cart`)}}><BookmarkIcon />YOUR FAVORITE</li>

      </div>
    </div>
  );
};

export default Sidebar;