import React from "react";
import { useState, useEffect } from "react";
import DigitalClock from "./DigitalClock";
const AnalogClock = ({ userTimeUpdate }) => {

  //analog clocks hours minutes and seconds
  const [analogHour, setAnalogHour] = useState('');
  const [analogMinute, setAnalogMinute] = useState('');
  const [analogSeconds, setAnalogSeconds] = useState('');


  // user input values in state
  const [cusMin, setCusMin] = useState(null);
  const [cusHour, setCusHour] = useState(null);

  const customMinute = (prevMinute) => {
    return (prevMinute === null && Number(userTimeUpdate && userTimeUpdate.userSelectedMinute) + 1) || prevMinute + 1;
  }

  const customHour = (prevHour) => {
    return (prevHour === null && Number(userTimeUpdate && userTimeUpdate.userSelectedHour) + 1);
  }
  //formatTime function if time less then 10 it will add 0 before it

  const formatTime = time => time < 10 ? `0 ${time}` : time;


  // Time function
  const handleTime = () => {
    // instantiate date from browser
    const date = new Date();
    date.setHours(date.getHours());
    let dateHours = formatTime(date.getHours());
    let dateMinutes = formatTime(date.getMinutes());
    let dateSeconds = formatTime(date.getSeconds());

    //setting analog time state to get time on clock
    setAnalogHour(dateHours);
    setAnalogMinute(dateMinutes);
    setAnalogSeconds(dateSeconds);

    if (userTimeUpdate && userTimeUpdate.userSelectedMinute) {
      if (cusMin === 59) {
        setCusMin(0);
      }
      if (dateSeconds === 59) {
        setCusMin(customMinute);
      } else {
        setCusMin(previousMin => previousMin);
      }
    }

    if (userTimeUpdate && userTimeUpdate.userSelectedHour) {
      if (cusHour > 12) {
        setCusHour(customHour);
      } else {
        setCusHour(previousMin => previousMin)
      }
    }
  };

  //set interval for analog
  let clockInterval;
  useEffect(() => {
    clockInterval = setInterval(handleTime, 1000);
  }, [clockInterval]);

  // clear interval
  useEffect(() => {
    return (() => {
      clearInterval(clockInterval)
    })
  }, []);


  return (
    <>
      <div className="clocks-container">
        <div className="analog-clock">
          <div className="dial seconds" style={secondsStyle}></div>
          <div className="dial minutes" style={secondsStyle}></div>
          <div className="dial hours" style={secondsStyle}></div>
          <span className="number-twelve">12</span>
          <span className="number-one">1</span>
          <span className="number-two">2</span>
          <span className="number-three">3</span>
          <span className="number-four">4</span>
          <span className="number-five">5</span>
          <span className="number-six">6</span>
          <span className="number-seven">7</span>
          <span className="number-eight">8</span>
          <span className="number-nine">9</span>
          <span className="number-ten">10</span>
          <span className="number-eleven">11</span>
        </div>
      </div>
      <div className="digital-clock">
        <DigitalClock />
      </ div>

    </>
  )
}

export default AnalogClock;
