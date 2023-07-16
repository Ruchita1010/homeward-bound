import { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import { formatTime } from '../../utils/timeFormatter';

const Timer = ({ timeMultiplier, setShowWorldgate }) => {
  const initialWayFinderTime = localStorage.getItem('WayfinderTime') || 30 * 60;
  const initialWorldgateTime = localStorage.getItem('WorldgateTime') || 4 * 60;
  const [wayfinderTime, setWayfinderTime] = useState(initialWayFinderTime);
  const [worldgateTime, setWorldgateTime] = useState(initialWorldgateTime);

  useEffect(() => {
    let wayfinderInterval = null;
    if (wayfinderTime > 0) {
      wayfinderInterval = setInterval(() => {
        setWayfinderTime((prevTime) => prevTime - 1);
      }, 1000 / timeMultiplier);
    }
    return () => {
      // fix: keeps setting it on every render, we want to set only before the component unmounts
      localStorage.setItem('WayfinderTime', wayfinderTime);
      clearInterval(wayfinderInterval);
    };
  }, [wayfinderTime]);

  useEffect(() => {
    const worldgateInterval = setInterval(() => {
      setWorldgateTime((prevTime) => prevTime - 1);
    }, 1000 / timeMultiplier);

    if (worldgateTime === -1) {
      setWorldgateTime(4 * 60);
      setShowWorldgate(true);
    }
    return () => {
      // fix: keeps setting it on every render, we want to set only before the component unmounts
      localStorage.setItem('WorldgateTime', worldgateTime);
      clearInterval(worldgateInterval);
    };
  }, [worldgateTime]);

  // restart the timers on page load
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('WayfinderTime');
      localStorage.removeItem('WorldgateTime');
    };

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
        <div>Time remaining: {formatTime(wayfinderTime)}</div>
        <div>Next worldgate in: {formatTime(worldgateTime)}</div>
      </div>
    </Html>
  );
};

export default Timer;
