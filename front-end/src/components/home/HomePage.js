import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
        connected with someone who best meets your needs.`
    };

    const handleLearnMore = (paragraph) => {
        return learnMore[paragraph] ? (
            <>
            <p className='paragraphs'>{PARAGRAPHS[paragraph]}</p>
            <div
            onClick={() => 
            setLearnMore({ ...learnMore, [paragraph]: !learnMore[paragraph] })
            }
            >
                <p className='underline'>View Less</p>

            </div>
            </>
        ) : (
            <div
            onClick={() =>
            setLearnMore({ ...learnMore, [paragraph] : !learnMore[paragraph] }) 
            }
            >
                <p className='underline'>Learn More</p>
            </div>
        )
    }

  return (
    <div>HomePage</div>
  )
}

export default HomePage