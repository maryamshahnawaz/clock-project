import { useState } from "react";
import AnalogClock from "./AnalogClock";
import Analog from './AnalogClock';
import "./App.scss";

function App() {
  // let time = new Date().toLocaleTimeString();
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [timeUpdate, setTimeUpdate] = useState({
    hr: null,
    min: null,
  });

  const handleUserHour = (event) => {
    setHour(event.target.value);
  };
  const handleUserMinute = (event) => {
    setMinute(event.target.value);
  };

  const updateTime = (e) => {
    e.preventDefault();
    setTimeUpdate({
      hr: hour,
      min: minute,
    });
  };
  return (
    <div className="App">
      <h1>Adjust Time</h1>
      {/* Created a form for user Input */}
      <form action="" onSubmit={updateTime}>
        {/* user input for hour */}
        <fieldset>
          <label htmlFor="hour">Select Time:</label>
          <input
            type="number"
            onChange={handleUserHour}
            placeholder={"Hour"}
            min={1}
            max={12}
            required
          />
        </fieldset>
        {/* user input for hour */}
        <fieldset>
          <label htmlFor="min">Min:</label>
          <input
            type="number"
            onChange={handleUserMinute}
            placeholder={"Min"}
            min={1}
            max={59}
            required
          />
        </fieldset>
        <button type="submit">reset time</button>
      </form>
      {/* components for both clocks*/}

      <div className="flex-container">
        {/* <Clock timeUpdate={timeUpdate} format={12} /> */}
        <AnalogClock timeUpdate={timeUpdate} format={12} />
      </div>
    </div>
  );
}

export default App;

