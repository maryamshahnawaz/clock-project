import { useState } from 'react';
import './App.scss';

function App() {

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [TimeUpdate, setTimeUpdate] = useState({
    userSelectedHour: null,
    userSelectedMinute: null,
  });

  // handleSubmit function declared
  const handleSubmit = (event) => {
    //prevent browser from refreshing
    event.preventDefault();
  }

  // take Hour input from user and update a Hour state
  const handleUserHour = (event) => {
    setHour(event.target.value);
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
            value={hour}
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
            value={minute}
            onChange={handleUserMinute}
            min="1"
            max="59"
          />
        </fieldset>
        <button type="submit">Adjust Time</button>
      </form>
    </div>
  );
}

export default App;
