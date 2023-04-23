import { useState } from 'react';
import StartScreen from './components/StartScreen';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  return (
    <>
      {showStartScreen ? (
        <StartScreen setShowStartScreen={setShowStartScreen} />
      ) : (
        <h1>Hello</h1>
      )}
    </>
  );
};

export default App;
