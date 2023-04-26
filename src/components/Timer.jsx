import { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';

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
  ); // 30 minutes in seconds
  const [minutesForCreation, setMinutesForCreation] = useState(30);
  const [secondsForCreation, setSecondsForCreation] = useState(0);

  const [remainingTimeForWorldgate, setRemainingTimeForWorldgate] = useState(
    initialTimeForWorldgate
  ); // 4 minutes in seconds
  const [minutesForWorldgate, setMinutesForWorldgate] = useState(30);
  const [secondsForWorldgate, setSecondsForWorldgate] = useState(0);

  useEffect(() => {
    let creationInterval = null;
    if (remainingTimeForCreation > 0) {
      creationInterval = setInterval(() => {
        setRemainingTimeForCreation((prevTime) => prevTime - 1);
      }, 1000 / timeMultiplier);
    }
    setMinutesForCreation(Math.floor(remainingTimeForCreation / 60));
    setSecondsForCreation(remainingTimeForCreation % 60);
    return () => {
      // fix: keeps setting it on every render, we want to set only before the component unmounts
      localStorage.setItem('TimeForCreation', remainingTimeForCreation);
      clearInterval(creationInterval);
    };
  }, [timeMultiplier, remainingTimeForCreation]);

  useEffect(() => {
    const worldgateInterval = setInterval(() => {
      setRemainingTimeForWorldgate((prevTime) => prevTime - 1);
    }, 1000 / timeMultiplier);
    if (remainingTimeForWorldgate === -1) {
      setRemainingTimeForWorldgate(4 * 60);
      setShowWorldgate(true);
    }
    setMinutesForWorldgate(Math.floor(remainingTimeForWorldgate / 60));
    setSecondsForWorldgate(remainingTimeForWorldgate % 60);
    return () => {
      // fix: keeps setting it on every render, we want to set only before the component unmounts
      localStorage.setItem('TimeForWorldgate', remainingTimeForWorldgate);
      clearInterval(worldgateInterval);
    };
  }, [timeMultiplier, remainingTimeForWorldgate, initialTimeForWorldgate]);

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
        <div>
          Time remaining: {`${minutesForCreation}:${secondsForCreation}`}
        </div>
        <div>
          Next worldgate in: {`${minutesForWorldgate}:${secondsForWorldgate}`}
        </div>
      </div>
    </Html>
  );
};

export default Timer;
