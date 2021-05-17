import React from 'react';
import { useState, useEffect } from "react";


const AnalogClock = ({ userTimeUpdate }) => {

  //analog clocks hours minutes and seconds
  const [analogHour, setAnalogHour] = useState('');
  const [analogMinute, setAnalogMinute] = useState('');
  const [analogSeconds, setAnalogSeconds] = useState('');


  // user input values in state
  const [cusMin, setCusMin] = useState(null);
  const [cusHour, setCusHour] = useState(null);

  const customMinute = (prevMinute) => {
    (prevMinute === null && Number(userTimeUpdate && userTimeUpdate.userSelectedMinute) + 1) || prevMinute + 1;
  }

  const customHour = (prevHour) => {
    (prevHour === null && Number(userTimeUpdate && userTimeUpdate.userSelectedHour) + 1);
  }
  //formatTime function if time less then 10 it will add 0 before it

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

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
    clockInterval = setInterval(handleDate, 1000);
  }, [clockInterval]);

  // clear interval
  useEffect(() => {
    return (() => {
      clearInterval(clockInterval)
    })
  }, []);


  return (
    <div>

    </div>
  )
}

export default AnalogClock;
