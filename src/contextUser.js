import React from 'react';
// useContext hook take a context object as an argument
import { createContext, useState } from 'react';
// we have access to two components consumer and provider we only use provider inside createContext we have provider and consumer it is stored in a UserContext if we want to get access to it we will call <UserContext.provider>
export const TimeContext = createContext({});

const ContextUser = (props) => {
  const [globalMinute, setGlobalminute] = useState(null);
  const [globalHour, setGlobalHour] = useState(null);

  const storeMinutes = (userMinutesInput) => {
    setGlobalminute(userMinutesInput);
  }

  const storeHours = (userHoursInput) => {
    setGlobalHour(userHoursInput);
  }

  return (
    <TimeContext.provider value={{ globalMinute, globalHour, storeMinutes, storeHours }}>
      {/* we need to wrap our whole application here to pass the data */}
      {props.children}
    </TimeContext.provider>
  )
}

export default ContextUser;

