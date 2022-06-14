import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { headerContext } from "../../context/headerContext";

const Sidebar = () => {
  const { sidebar,renderMobileMenu } = useContext(headerContext);
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar-container">
        <li><HomeRoundedIcon />HOME</li>
        <li>PRODUCTS</li>
        <li>CONTACT US</li>
        <li>FILMS TO DAY</li>
        <li>ABOUT US</li>
        {renderMobileMenu}
      </div>
    </div>
  );
};

export default Sidebar;
