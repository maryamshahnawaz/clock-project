import React from 'react';

// useContext hook take a context object as an argument
import { createContext, useState } from 'react';
// we have access to two components consumer and provider we only use provider inside createContext we have provider and consumer it is stored in a UserContext if we want to get access to it we will call <UserContext.provider>

const contextUser = () => {
  const [globalMinute, setGlobalminute] = useState(null);
  const [globalHour, setGlobalHour] = useState(null);
  return (
    <div>

    </div>
  )
}

export default contextUser;

