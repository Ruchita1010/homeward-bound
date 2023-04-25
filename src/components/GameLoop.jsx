import { Suspense, useContext, useEffect, useState } from 'react';
import MessageScreen from './MessageScreen';
import { WorldContext } from '../contexts/WorldContext';
import { Canvas } from '@react-three/fiber';
import VerdantGrove from './VerdantGrove';

const GameLoop = () => {
  const [showMessageScreen, setShowMessageScreen] = useState(true);
  const { state, changeWorld } = useContext(WorldContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessageScreen(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [showMessageScreen]);

  return (
    <>
      {showMessageScreen ? (
        <MessageScreen message={state.message} />
      ) : (
        <Canvas shadows>
          <Suspense fallback={null}>
            <VerdantGrove />
          </Suspense>
        </Canvas>
      )}
    </>
  );
};

export default GameLoop;
