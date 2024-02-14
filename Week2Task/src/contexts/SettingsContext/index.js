import {createContext, useContext} from 'react';

const SettingsContext = createContext();

export const SettingsContextProvider = ({value, children}) => {
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
