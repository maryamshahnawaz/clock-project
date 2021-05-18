import React from "react";
import { useEffect, useState } from "react";
import { UserContext } from "./context";
import DigitalClock from "./DigitalClock";


const AnalogClock = ({ timeUpdate, format }) => {
  //useStates
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const ctx = React.useContext(UserContext);

  const [cusMin, setCusMin] = useState(null);
  const [cusHour, setCusHour] = useState(null);

  let clockInterval;
  useEffect(() => {
    clockInterval = setInterval(handleDate, 1000);
  }, [clockInterval]);

  useEffect(() => () => clearInterval(clockInterval), []);

  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };
  const minutesStyle = {
    transform: `rotate(${(ctx.cusMins !== null && ctx.cusMins * 6) ||
      cusMin ||
      (timeUpdate && timeUpdate.min * 6) ||
      minutes * 6
      }deg)`,
  };
  const hoursStyle = {
    transform: `rotate(${(ctx.cusHours != null && ctx.cusHours * 30) ||
      cusHour ||
      (timeUpdate && timeUpdate.hr * 30) ||
      hours * 30
      }deg)`,
  };

  const setCustomMinute = (previousMin) =>
    (previousMin === null && Number(timeUpdate && timeUpdate.min) + 1) ||
    previousMin + 1;

  const setCustomHour = (previousHour) =>
    (previousHour === null && Number(timeUpdate && timeUpdate.hr) + 1) ||
    previousHour + 1;

  const handleDate = () => {
    const date = new Date();
    date.setHours(date.getHours());
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    if (timeUpdate && timeUpdate.min) {
      if (cusMin === 59) {
        setCusMin(0);
      }

      if (seconds === 59) {
        setCusMin(setCustomMinute);
      } else {
        setCusMin((previousMin) => previousMin);
      }
    }

    if (timeUpdate && timeUpdate.hr) {
      if (cusHour > 12) {
        setCusHour(1);
      } else if (cusMin === 59) {
        setCusHour(setCustomHour);
      } else {
        setCusHour((previousMin) => previousMin);
      }
    }
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  return (
    <div className="clocks">
      <div className="analog-clocks">
        <div className="dial seconds" style={secondsStyle} />
        <div className="dial minutes" style={minutesStyle} />
        <div className="dial hours" style={hoursStyle} />

        <span className="number-twelve">
          {/* <small style={{ fontSize: "10px" }}>12</small> */}
          <span>12</span>
        </span>
        <span className="number-one">
          {/* <small style={{ fontSize: "10px" }}>1</small> */}
          <span>1</span>
        </span>
        <span className="number-two">
          {/* <small style={{ fontSize: "10px" }}>2</small> */}
          <span>2</span>
        </span>
        <span className="number-three">
          {/* <small style={{ fontSize: "10px" }}>3</small> */}
          <span>3</span>
        </span>
        <span className="number-four">
          {/* <small style={{ fontSize: "10px" }}>4</small> */}
          <span>4</span>
        </span>
        <span className="number-five">
          {/* <small style={{ fontSize: "10px" }}>5</small> */}
          <span>5</span>
        </span>
        <span className="number-six">
          {/* <small style={{ fontSize: "10px" }}>6</small> */}
          <span>6</span>
        </span>
        <span className="number-seven">
          {/* <small style={{ fontSize: "10px" }}>7</small> */}
          <span>7</span>
        </span>
        <span className="number-eight">
          {/* <small style={{ fontSize: "10px" }}>8</small> */}
          <span>8</span>
        </span>
        <span className="number-nine">
          {/* <small style={{ fontSize: "10px" }}>9</small> */}
          <span>9</span>
        </span>
        <span className={"number-ten"}>
          {/* <small style={{ fontSize: "10px" }}>10</small> */}
          <span>10</span>
        </span>
        <span className={"number-eleven"}>
          {/* <small style={{ fontSize: "10px" }}>11</small> */}
          <span>11</span>
        </span>
      </div>

      <div className="digital-clocks wrapper">
        <DigitalClock timeUpdate={timeUpdate} format={format} />
      </div>
    </div>
  )
};

export default AnalogClock;

