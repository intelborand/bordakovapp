
import React from "react";
import { useState, useEffect } from "react";
import '../styles/timer.scss';

export default function Timer({date}) {

    const calculateTimeLeft = () => {
        // let year = new Date().getFullYear();
        const difference = +new Date(date) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <div className='container1'>
            {timeLeft[interval]} {interval}{" "}
          </div>
        );
      });
      return (
          <div className='container-timer'>
                <div className='timer1'>
                    <h1>This page coming ...</h1>
                    {timerComponents.length ? timerComponents : <h6>Time's up!</h6>}
                </div>
          </div>

      );
    
}