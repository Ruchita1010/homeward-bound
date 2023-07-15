import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Home from '../worlds/Home/Home';
import Void from './Void/Void';
import '../index.css';

const RarePortalDispatcher = ({ setGameLoop }) => {
  const [rarePortalOccurence, setRarePortalOccurence] = useState(false);
  return (
    <Canvas>
      {rarePortalOccurence ? (
        <Void setGameLoop={setGameLoop} />
      ) : (
        <Home setRarePortalOccurence={setRarePortalOccurence} />
      )}
    </Canvas>
  );
};

export default RarePortalDispatcher;
