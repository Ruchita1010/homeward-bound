import { PerspectiveCamera } from '@react-three/drei';
import Mew from './modelComponents/Mew';
import { useRef } from 'react';

const Player = () => {
  const targetRef = useRef(null);
  return (
    <group ref={targetRef}>
      <PerspectiveCamera makeDefault position={[0, 3, 10]} />
      <Mew scale={3} position={[0, 1, 4]} rotation={[0, Math.PI, 0]} />
    </group>
  );
};

export default Player;
