import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Header2 from "./Components/Header/Header2";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Sidebar from "./Components/Header/Sidebar";
import BackDrop from "./Components/Header/BackDrop";
import HeaderContextProvider from "./context/headerContext";
import { Container } from "@mui/material";
import MoviesCard from "./Components/MoviesCard/MoviesCard"

const App = () => {
  return (
    <BrowserRouter>
      <HeaderContextProvider>
        <Container>
            <Header2 />
            <Sidebar />
            <BackDrop />
            <Routing />
       </Container> 
      </HeaderContextProvider>
    </BrowserRouter>
  );
};

export default App;
