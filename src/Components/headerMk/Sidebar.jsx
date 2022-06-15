import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { headerContext } from "../../contexts/headerContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { sidebar, toggleSidebar} = useContext(headerContext);
  const navigate = useNavigate()
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar-container">
        <li onClick={() =>{toggleSidebar(); navigate(`/`)}}><HomeRoundedIcon />HOME</li>
        <li onClick={() =>{toggleSidebar(); navigate(`/movies`)}}><LocalMoviesIcon />MOVIES</li>
        <li onClick={() =>{toggleSidebar(); navigate(`/series`)}}><LiveTvIcon />SERIES</li>
        <li onClick={() =>{toggleSidebar(); navigate(`/soon`)}}><AccessTimeIcon />SOON</li>
      </div>
    </div>
  );
};

export default Sidebar;