// useContext hook take a context object as an argument
import React, { createContext, useState } from 'react';
// we have access to two components consumer and provider we only use provider inside createContext we have provider and consumer it is stored in a UserContext if we want to get access to it we will call <UserContext.provider>
export const UserContext = createContext({});

const AppContextWrapper = (props) => {
  const [cusMins, setCusMins] = useState(null);
  const [cusHours, setCusHours] = useState(null);

  const storeMin = (user) => {
    setCusMins(user);
  }

  const storeHour = (token) => {
    setCusHours(token);
  }

  return (
    <UserContext.Provider value={{ cusMins, cusHours, storeMin, storeHour }}>
      {/* we need to wrap our whole application here to pass the data */}
      {props.children}
    </UserContext.Provider>
  )
}

export default AppContextWrapper;

