import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/headerMk/Header";
import Routing from "./Routing";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@mui/material";
import MoviesContextProvider from "./contexts/moviesContext";
import HeaderContextProvider from "./contexts/headerContext";
import Sidebar from "./Components/headerMk/Sidebar";
import BackDrop from "./Components/headerMk/BackDrop";

const App = () => {
  return (
    <>
    <HeaderContextProvider>
      <MoviesContextProvider>
        <BrowserRouter>
          <Container
            maxWidth="lg"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              flexFlow: "wrap",
            }}
          >
            <Header />
            <Routing />
            {/* <Header /> */}
            <Sidebar />
            <BackDrop />
            <Footer />
          </Container>
        </BrowserRouter>
      </MoviesContextProvider>
      </HeaderContextProvider>
    </>
  );
};

export default App;
