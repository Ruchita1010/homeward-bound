import { useEffect, useState } from 'react';

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const keys = {
    ArrowUp: 'forward',
    ArrowDown: 'backward',
    ArrowRight: 'right',
    ArrowLeft: 'left',
  };

  const findKey = (key) => keys[key];

  useEffect(() => {
    const handleKeyUp = (e) => {
      setInput((prevInput) => ({ ...prevInput, [findKey(e.code)]: false }));
    };
    const handleKeyDown = (e) => {
      setInput((prevInput) => ({ ...prevInput, [findKey(e.code)]: true }));
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return input;
};
