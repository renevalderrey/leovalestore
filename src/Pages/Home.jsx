import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import setup from "../Images/Setup.jpg";
import setup2 from "../Images/Setup2.jpg";
import setup3 from "../Images/Setup3.jpg";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={setup} />
        <img src={setup2} />
        <img src={setup3} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
