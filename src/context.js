// useContext hook take a context object as an argument
import React, { createContext, useState } from "react";
export const UserContext = createContext({});
// we have access to two components consumer and provider we only use provider inside createContext we have provider and consumer it is stored in a UserContext if we want to get access to it we will call <UserContext.provider>
const AppContextWrapper = (props) => {
  const [cusMins, setCusMin] = useState(null);
  const [cusHours, setCusHour] = useState(null);

  const storeMin = (user) => {
    setCusMin(user);
  };
  const storeHour = (token) => {
    setCusHour(token);
  };

  return (
    <UserContext.Provider value={{ cusMins, cusHours, storeMin, storeHour }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default AppContextWrapper;

