import React, { useEffect, useState } from "react";
import { UserContext } from "./context";

const DigitalClock = ({ timeUpdate, format }) => {
  const [cusMin, setCusMin] = useState(null);
  const [cusHour, setCusHour] = useState(0);

  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let formattedHr = format ? hr % format : hr;
  const ctx = React.useContext(UserContext);

  const setCustomMinute = (previousMin) =>
    (previousMin === null && Number(timeUpdate && timeUpdate.min) + 1) ||
    previousMin + 1;

  const setCustomHour = (previousHour) =>
    (previousHour === 0 && Number(timeUpdate && timeUpdate.hr) + 1) ||
    previousHour + 1;

  useEffect(() => {
    if (timeUpdate && timeUpdate.min) {
      if (cusMin > 59) {
        setCusMin(0);

        ctx.storeMin(0);
      } else if (sec === 0) {
        setCusMin(setCustomMinute);

        ctx.storeMin(cusMin);
      } else {
        setCusMin((previousMin) => previousMin);

        ctx.storeMin(cusMin);
      }
    }

    if (timeUpdate && timeUpdate.hr) {
      if (cusHour > 12) {
        setCusHour(1);

        ctx.storeHour(1);
      } else if (cusMin > 59) {
        setCusHour(setCustomHour);

        ctx.storeHour(cusHour);
      } else {
        setCusHour((previousMin) => previousMin);

        ctx.storeHour(cusHour);

      }
    }
    // eslint-disable-next-line
  }, [sec, min]);


  return (
    <>
      <div className="digital-clock">
        {cusHour || (timeUpdate && timeUpdate.hr) ||
          (formattedHr < 10 ? ("0" + formattedHr).slice(-2) : formattedHr)}
        :{cusMin !== null ? cusMin : (timeUpdate && timeUpdate.min) || min}:
        {sec}
      </div>
      <div></div>
    </>
  );
};

export default DigitalClock;
