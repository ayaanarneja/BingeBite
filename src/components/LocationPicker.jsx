import { useState, useRef, useEffect } from 'react';
import { FiMapPin, FiChevronDown, FiCheck } from 'react-icons/fi';
import { useLocation } from '../context/LocationContext';
import './LocationPicker.css';

export default function LocationPicker({ className = '' }) {
  const { selectedCity, setSelectedCity, cities } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <div className={`location-picker ${className}`} ref={wrapperRef}>
      <button
        type="button"
        className="location-picker-trigger"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <FiMapPin className="location-pin-icon" />
        <span className="location-picker-label">{selectedCity}</span>
        <FiChevronDown className={`location-chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="location-dropdown" role="listbox">
          {cities.map((city) => (
            <button
              type="button"
              key={city}
              className={`location-option ${city === selectedCity ? 'active' : ''}`}
              onClick={() => handleSelect(city)}
              role="option"
              aria-selected={city === selectedCity}
            >
              <span>{city}</span>
              {city === selectedCity && <FiCheck className="location-check-icon" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
