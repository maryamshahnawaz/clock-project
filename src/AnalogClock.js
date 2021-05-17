import React from "react";
import { useState, useEffect, useContext } from "react";
import DigitalClock from "./DigitalClock";
import { TimeContext } from './contextUser';

const AnalogClock = ({ userTimeUpdate }) => {

  //analog clocks hours minutes and seconds
  const [analogHour, setAnalogHour] = useState('');
  const [analogMinute, setAnalogMinute] = useState('');
  const [analogSeconds, setAnalogSeconds] = useState('');

  // user input values in state
  const [cusMin, setCusMin] = useState(null);
  const [cusHour, setCusHour] = useState(null);
  const timeData = useContext(TimeContext);
  const secondsStyle = {
    tranform: `rotate(${analogSeconds * 6}deg)`,
  };

  const minutesStyle = {
    tranform: `rotate(${(timeData.globalMinute !== null && timeData.globalMinute * 6) || cusMin ||
      (userTimeUpdate && userTimeUpdate.userSelectedMinute * 6 || analogMinute * 6)
      }deg)`,
  };

  const hoursStyle = {
    transform: `rotate(${(timeData.globalHour !== null && timeData.globalHour * 30) || cusHour ||
      (userTimeUpdate && userTimeUpdate.userSelectedHour * 30) || analogHour * 30
      }deg)`,
  };

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
      <div className="clock">
        <div className="analog-clocks">
          <div className="dial seconds" style={secondsStyle} />
          <div className="dial minutes" style={minutesStyle} />
          <div className="dial hours" style={hoursStyle} />
          <span className="number-twelve">
            <small style={{ fontSize: "10px" }}>12</small>
          </span> <span className="number-twelve">
            <small style={{ fontSize: "10px" }}>12</small>
          </span>
          <span className="number-one">
            <small style={{ fontSize: "10px" }}>1</small>
          </span>
          <span className="number-two">
            <small style={{ fontSize: "10px" }}>2</small>
          </span>
          <span className="number-three">
            <small style={{ fontSize: "10px" }}>3</small>
          </span>
          <span className="number-four">
            <small style={{ fontSize: "10px" }}>4</small>
          </span>

          <span className="number-five">
            <small style={{ fontSize: "10px" }}>5</small>
          </span>
          <span className="number-six">
            <small style={{ fontSize: "10px" }}>6</small>
          </span>
          <span className="number-seven">
            <small style={{ fontSize: "10px" }}>7</small>
          </span>
          <span className="number-eight">
            <small style={{ fontSize: "10px" }}>8</small>
          </span>
          <span className="number-nine">
            <small style={{ fontSize: "10px" }}>9</small>
          </span>
          <span className={"number-ten"}>
            <small style={{ fontSize: "10px" }}>10</small>
          </span>
          <span className={"number-eleven"}>
            <small style={{ fontSize: "10px" }}>11</small>
          </span>
        </div>
        <div className="digital-clock">
          <DigitalClock />
        </ div>
      </div>

    </>
  )
}

export default AnalogClock;
