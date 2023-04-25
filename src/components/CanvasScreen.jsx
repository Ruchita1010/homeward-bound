import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Home from './Home';
import Void from './Void';
import '../index.css';

const CanvasScreen = ({ setGameLoop }) => {
  const [rarePortalOccurence, setRarePortalOccurence] = useState(false);
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        {rarePortalOccurence ? (
          <Void setGameLoop={setGameLoop} />
        ) : (
          <Home setRarePortalOccurence={setRarePortalOccurence} />
        )}
      </Suspense>
    </Canvas>
  );
};

export default CanvasScreen;
