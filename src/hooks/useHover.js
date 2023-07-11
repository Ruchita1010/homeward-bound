import { useState } from 'react';
import { useCursor } from '@react-three/drei';

export const useHover = (cursorOnOver = 'pointer', cursorOnOut = 'auto') => {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered, cursorOnOver, cursorOnOut);

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return [handlePointerOver, handlePointerOut];
};
