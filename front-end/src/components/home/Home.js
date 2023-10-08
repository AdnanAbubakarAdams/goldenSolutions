import React from 'react';
import HomePage from './HomePage';

const Home = () => {
  return (
    <>
    <div className='home'>
        {/* <h1>WELCOME TO GOLDEN SOLUTIONS!</h1> */}
        <video src='/video/volunteer.mov' autoPlay loop muted />
    </div>
    <HomePage />
    </>
  )
}

export default Home;