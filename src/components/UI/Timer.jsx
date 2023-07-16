import { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import { formatTime } from '../../utils/timeFormatter';

// clear localStorage
const handleBeforeUnload = () => {
  localStorage.removeItem('TimeForCreation');
  localStorage.removeItem('TimeForWorldgate');
};

const Timer = ({ timeMultiplier, setShowWorldgate }) => {
  const initialTimeForCreation =
    localStorage.getItem('TimeForCreation') || 30 * 60;
  const initialTimeForWorldgate =
    localStorage.getItem('TimeForWorldgate') || 4 * 60;
  const [remainingTimeForCreation, setRemainingTimeForCreation] = useState(
    initialTimeForCreation
  );
  const [remainingTimeForWorldgate, setRemainingTimeForWorldgate] = useState(
    initialTimeForWorldgate
  );

  useEffect(() => {
    let creationInterval = null;
    if (remainingTimeForCreation > 0) {
      creationInterval = setInterval(() => {
        setRemainingTimeForCreation((prevTime) => prevTime - 1);
      }, 1000 / timeMultiplier);
    }

    return () => {
      // fix: keeps setting it on every render, we want to set only before the component unmounts
      localStorage.setItem('TimeForCreation', remainingTimeForCreation);
      clearInterval(creationInterval);
    };
  }, [remainingTimeForCreation]);

  useEffect(() => {
    const worldgateInterval = setInterval(() => {
      setRemainingTimeForWorldgate((prevTime) => prevTime - 1);
    }, 1000 / timeMultiplier);
    if (remainingTimeForWorldgate === -1) {
      setRemainingTimeForWorldgate(4 * 60);
      setShowWorldgate(true);
    }

    return () => {
      // fix: keeps setting it on every render, we want to set only before the component unmounts
      localStorage.setItem('TimeForWorldgate', remainingTimeForWorldgate);
      clearInterval(worldgateInterval);
    };
  }, [remainingTimeForWorldgate]);

  // restart the timers on page load
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Html position="fixed">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '14rem',
          padding: '10px',
          color: '#e1e1e1',
          fontSize: '1.2rem',
          lineHeight: '2rem',
        }}>
        <div>Time remaining: {formatTime(remainingTimeForCreation)}</div>
        <div>Next worldgate in: {formatTime(remainingTimeForWorldgate)}</div>
      </div>
    </Html>
  );
};

export default Timer;
