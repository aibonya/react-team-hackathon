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
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/cartContext";

const App = () => {
  return (
    <>
    <AuthContextProvider>
    <HeaderContextProvider>
      <MoviesContextProvider>
        <CartContextProvider>
        <BrowserRouter>
        <Header />
          <Container
            maxWidth="lg"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              flexFlow: "wrap",
              backgroundColor: "white",
            }}
          >  
            <Routing />
            <Sidebar />
            <BackDrop />
          </Container>
          <Container maxWidth="lg"
          style={{padding: '0px'}}>
          <Footer />
          </Container>
        </BrowserRouter>
        </CartContextProvider>
      </MoviesContextProvider>
      </HeaderContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
