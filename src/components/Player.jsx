import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useInput } from '../hooks/useInput';
import Mew from './modelComponents/Mew';

const Player = ({ boundary }) => {
  const { x1, x2, z1, z2 } = boundary;
  const position = [0, 1, 4];
  const { forward, backward, left, right } = useInput();
  const [rotation, setRotation] = useState([0, Math.PI, 0]);

  const checkBoundary = (axis, currentPosition) => {
    let newPosition = 0;
    if (axis === 'X') {
      newPosition = currentPosition + (right ? 0.2 : left ? -0.2 : 0);
      return newPosition > x1 || newPosition < -x2
        ? currentPosition
        : newPosition;
    }
    if (axis === 'Z') {
      newPosition = currentPosition + (forward ? -0.2 : backward ? 0.2 : 0);
      return newPosition > z1 || newPosition < -z2
        ? currentPosition
        : newPosition;
    }
  };

  const targetRef = useRef(null);
  useFrame((state) => {
    const currentX = targetRef.current.position.x;
    const currentZ = targetRef.current.position.z;
    targetRef.current.position.x = checkBoundary('X', currentX);
    targetRef.current.position.z = checkBoundary('Z', currentZ);
    state.camera.lookAt(targetRef.current.position);
    state.camera.updateProjectionMatrix();
    const angle = Math.atan2(left - right, forward - backward) + Math.PI;
    setRotation([0, angle, 0]);
  });

  return (
    <group ref={targetRef}>
      <PerspectiveCamera makeDefault position={[0, 3, 10]} />
      <Mew scale={3} position={position} rotation={rotation} />
    </group>
  );
};

export default Player;
