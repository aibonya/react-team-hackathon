import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
