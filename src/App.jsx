import { useState } from 'react';
import StartScreen from './components/UI/StartScreen/StartScreen';
import RarePortalDispatcher from './components/RarePortalDispatcher';
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
        <RarePortalDispatcher setGameLoop={setGameLoop} />
      )}
    </>
  );
};

export default App;
