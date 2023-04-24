import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Home from './Home';
import '../index.css';

const CanvasScreen = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </Canvas>
  );
};

export default CanvasScreen;
