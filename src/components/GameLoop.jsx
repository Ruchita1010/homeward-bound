import { Suspense, lazy, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Blackhole from './ModelComponents/Blackhole';
import Timer from './UI/Timer';
import MessageScreen from './UI/MessageScreen/MessageScreen';
import worlds from '../data/worlds.json';

const GameLoop = () => {
  const [showMessageScreen, setShowMessageScreen] = useState(true);
  const [showWorldgate, setShowWorldgate] = useState(false);
  const [currentWorldName, setCurrentWorldName] = useState('VerdantGrove');
  const timeMultiplier = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessageScreen(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [showMessageScreen]);

  useEffect(() => {
    if (showWorldgate) {
      const timeout = setTimeout(() => {
        setShowWorldgate(false);
      }, 5000 / timeMultiplier);
      return () => clearTimeout(timeout);
    }
  }, [showWorldgate]);

  const handleBlackholeClick = (nextWorldName) => {
    setShowMessageScreen(true);
    setCurrentWorldName(nextWorldName);
  };

  /* React does not support rendering an imported module as a component directly so React.lazy is required as it is a built-in function specifically designed to handle dynamic imports and lazy loading */
  const CurrentWorldComponent = lazy(() =>
    import(`../worlds/${currentWorldName}/${currentWorldName}.jsx`)
  );

  const { message, blackhole, nextWorldName } = worlds[currentWorldName];

  return (
    <>
      {showMessageScreen ? (
        <MessageScreen message={message} />
      ) : (
        <Canvas shadows>
          <Suspense fallback={null}>
            <Timer
              timeMultiplier={timeMultiplier}
              setShowWorldgate={setShowWorldgate}
            />
            <CurrentWorldComponent />
            {showWorldgate && (
              <Blackhole
                position={blackhole.position}
                rotation={blackhole.rotation}
                scale={blackhole.scale}
                onClick={() => handleBlackholeClick(nextWorldName)}
              />
            )}
          </Suspense>
        </Canvas>
      )}
    </>
  );
};

export default GameLoop;
