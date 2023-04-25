import { createContext, useReducer } from 'react';

const worldReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_WORLD':
      return {
        currentWorld: action.payload.world,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export const WorldContext = createContext();

export const WorldProvider = ({ children }) => {
  const initialState = {
    currentWorld: 'Home',
    message: 'Home where the heart is',
  };
  const [state, dispatch] = useReducer(worldReducer, initialState);

  const changeWorld = (world, message) => {
    dispatch({ type: 'CHANGE_WORLD', payload: { world, message } });
  };

  return (
    <WorldContext.Provider value={{ state, changeWorld }}>
      {children}
    </WorldContext.Provider>
  );
};
