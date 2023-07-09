import { useState } from 'react';
import { motion } from 'framer-motion';
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
      ) : (
        <>
          {gameLoop ? (
            <GameLoop />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                backgroundColor: '#020202',
                height: '100vh',
              }}>
              <CanvasScreen setGameLoop={setGameLoop} />
            </motion.div>
          )}
        </>
      )}
    </>
  );
};

export default App;
