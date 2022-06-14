import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@mui/material";
const App = () => {
  return (
    <>
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
          <Footer />
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
