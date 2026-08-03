import { createContext, useContext, useState, useEffect } from 'react';
import { cities } from '../data/mockData';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(() => {
    const saved = localStorage.getItem('selectedCity');
    return saved && cities.includes(saved) ? saved : 'All Cities';
  });

  useEffect(() => {
    localStorage.setItem('selectedCity', selectedCity);
  }, [selectedCity]);

  const value = {
    selectedCity,
    setSelectedCity,
    cities: ['All Cities', ...cities],
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
