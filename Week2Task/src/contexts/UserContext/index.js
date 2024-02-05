import {createContext, useContext} from 'react';

const UserContext = createContext();

export const UserContextProvider = ({value, children}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
