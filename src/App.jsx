import { useState } from 'react';
import StartScreen from './components/UI/StartScreen/StartScreen';
import CanvasScreen from './components/CanvasScreen';
import GameLoop from './components/GameLoop';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [gameLoop, setGameLoop] = useState(false);
  return (
    <>
      {showStartScreen ? (
        <StartScreen setShowStartScreen={setShowStartScreen} />
      ) : gameLoop ? (
        <GameLoop />
      ) : (
        <CanvasScreen setGameLoop={setGameLoop} />
      )}
    </>
  );
};

export default App;
