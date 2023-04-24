import { useState } from 'react';
import { motion } from 'framer-motion';
import StartScreen from './components/StartScreen';
import CanvasScreen from './components/CanvasScreen';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  return (
    <>
      {showStartScreen ? (
        <StartScreen setShowStartScreen={setShowStartScreen} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor: '#e1e1e1',
            height: '100vh',
          }}>
          <CanvasScreen />
        </motion.div>
      )}
    </>
  );
};

export default App;
