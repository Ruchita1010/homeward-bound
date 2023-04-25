import { useState } from 'react';
import { motion } from 'framer-motion';
import StartScreen from './components/StartScreen';
import CanvasScreen from './components/CanvasScreen';
import GameLoop from './components/GameLoop';
import { WorldProvider } from './contexts/WorldContext';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [gameLoop, setGameLoop] = useState(false);
  return (
    <>
      {showStartScreen && (
        <StartScreen setShowStartScreen={setShowStartScreen} />
      )}
      {gameLoop ? (
        <WorldProvider>
          <GameLoop />
        </WorldProvider>
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
  );
};

export default App;
