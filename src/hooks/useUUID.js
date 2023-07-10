import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useUUID = (arraySize = 1) => {
  // memoizing keys to prevent their regeneration every time the component re-renders
  return useMemo(
    () => Array.from({ length: arraySize }, () => uuidv4()),
    [arraySize]
  );
};
