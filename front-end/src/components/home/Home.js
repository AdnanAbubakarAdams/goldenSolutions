import React from "react";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <>
      <h1>WELCOME TO GOLDEN SOLUTIONS!</h1>
      <div className="home">
        <video src="/video/volunteer.mov" autoPlay loop muted />
      </div>
      <HomePage />
    </>
  );
};

export default Home;
