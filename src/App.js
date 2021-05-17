import './App.scss';
import AnalogClock from "./AnalogClock";
import { useState } from 'react';

function App() {
  //hours and minute for user input
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [timeUpdate, setTimeUpdate] = useState({
    hr: null,
    min: null,
  });

  // handleSubmit function declared
  const handleSubmit = (event) => {
    //prevent browser from refreshing
    event.preventDefault();
    // updating hour and minute state inside setTimeUpdate
    setTimeUpdate({
      hr: hour,
      min: minute,
    });
  }

  // take Hour input from user and update a Hour state
  const handleUserHour = (event) => {
    setHour(event.target.value);
  }
  // take Minute input from user and update a Minute state
  const handleUserMinute = (event) => {
    setMinute(event.target.value);
  }

  return (
    <div className="App">
      <h1>Adjust Time</h1>
      {/* Created a form for taking user input */}
      <form action="#" className="time-form" onSubmit={handleSubmit}>
        {/* User input for Hour */}
        <fieldset>
          <label htmlFor="hour-box">Hour: </label>
          <input type="number"
            id="hour-box"
            name="hour-box"
            value={userInputHour}
            onChange={handleUserHour}
            placeholder="Hour"
            min="1"
            max="12"
            required
          />
        </fieldset>

        {/* User input for Minute */}
        <fieldset>
          <label htmlFor="minute-box">Minute: </label>
          <input type="number"
            id="minute-box"
            name="minute-box"
            value={userInputMinute}
            onChange={handleUserMinute}
            placeholder="Minute"
            min="1"
            max="59"
            required
          />
        </fieldset>
        <button type="submit">Adjust Time</button>
      </form>
      {/* Analog component */}
      <div className="flex-container">
        <AnalogClock timeUpdate={timeUpdate} format={12} />
      </div>
    </div>
  );
}

export default App;
