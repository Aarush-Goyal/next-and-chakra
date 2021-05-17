import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const Main = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Main;
