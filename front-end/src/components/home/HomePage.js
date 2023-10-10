import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// SCSS
import './Home.scss';

import Cards from "../cards/Cards";

const HomePage = () => {
  const navigate = useNavigate();

  const [learnMore, setLearnMore] = useState({
    partTwo: false,
  });

  const PARAGRAPHS = {
    paraTwo: `That's where we come in! Our goal at GoldenSolutions is to relieve"
        some of the stress and anxiety of these situations by connecting
        seniors, who need an extra hand with everyday tasks, with local,
        friendly volunteers who are willing and able to lend their time and
        skills.
        Immediate families and friends may not always be available to offer
        help. But New York has thousands of helpful individuals just a
        button click away ready to lend a hand. Together, we can continue to
        foster a sense of community!
        All of our users are verified after a rigrous background check. With
        a few simple and straightforward steps, you will seamlessly be
        connected with someone who best meets your needs.`,
  };

  const handleLearnMore = (paragraph) => {
    return learnMore[paragraph] ? (
      <>
        <p className="paragraphs">{PARAGRAPHS[paragraph]}</p>
        <div
          onClick={() =>
            setLearnMore({ ...learnMore, [paragraph]: !learnMore[paragraph] })
          }
        >
          <p className="underline">View Less</p>
        </div>
      </>
    ) : (
      <div
        onClick={() =>
          setLearnMore({ ...learnMore, [paragraph]: !learnMore[paragraph] })
        }
      >
        <p className="underline">Learn More</p>
      </div>
    );
  };

  return (
    <div className="homePage">
      <div className="homePage__info">
        <div>
          <h1>How It Works</h1>
          <p>
            As you grow you become wiser and have many life experiences. Getting
            older is a normal part of life with it's up's and down's. You may
            also find that basic everyday tasks become a little bit more
            difficult and you could use some help.
          </p>
          {handleLearnMore("paraTwo")}
        </div>
        <button onClick={() => navigate("/sign-up")}>SIGN UP NOW</button>
      </div>
      <div className="homePage__cardholder">
        <Cards
        label='Golden Solutions'
        src=''
        text=''
        path='#' 
        />
        <Cards
        label='Golden Solutions'
        src=''
        text=''
        path='#'
        />
        <Cards
        label='Golden Solutions'
        src=''
        text=''
        path='#'
        />
      </div>
    </div>
  );
};

export default HomePage;
