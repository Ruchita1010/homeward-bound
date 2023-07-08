import { Suspense, useContext, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { WorldContext } from '../contexts/WorldContext';
import { degreeToRadian } from '../helpers/angleConverter';
import Blackhole from './ModelComponents/Blackhole';
import Timer from './UI/Timer';
import MessageScreen from './UI/MessageScreen/MessageScreen';
import VerdantGrove from '../worlds/VerdantGrove/VerdantGrove';
import NewWorld from '../worlds/NewWorld/NewWorld';

const GameLoop = () => {
  const [showMessageScreen, setShowMessageScreen] = useState(true);
  const [showWorldgate, setShowWorldgate] = useState(false);
  const { state, changeWorld } = useContext(WorldContext);
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

  return (
    <>
      {showMessageScreen ? (
        <MessageScreen message={state.message} />
      ) : (
        <Canvas shadows>
          <Suspense fallback={null}>
            <Timer
              timeMultiplier={timeMultiplier}
              setShowWorldgate={setShowWorldgate}
            />
            {state.currentWorld === 'VerdantGrove' && <VerdantGrove />}
            {state.currentWorld === 'NewWorld' && <NewWorld />}
            {showWorldgate && (
              <Blackhole
                position={[2, 3.5, -10]}
                rotation={[degreeToRadian(90), 0, 0]}
                scale={0.5}
                onClick={() => {
                  setShowMessageScreen(true);
                  changeWorld('NewWorld', 'the land of the new');
                }}
              />
            )}
          </Suspense>
        </Canvas>
      )}
    </>
  );
};

export default GameLoop;
