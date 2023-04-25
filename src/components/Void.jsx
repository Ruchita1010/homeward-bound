import { useEffect, useState } from 'react';
import { Text } from '@react-three/drei';
import WispSoul from './modelComponents/WispSoul';

const Void = ({ setGameLoop }) => {
  const [sentences, setSentences] = useState([
    '',
    `Oh, a traveller after 100 years, such an intriguing sight!`,
    `But I have no time for delight, \nso heed my mystical message right`,
    `With certain powers gathered from a world's care, \nThe Starry Wayfinder will shine, a portal rare`,
    `Help those in need, and share in their power bright, \nFor the Wayfinder's creation, this kindness will ignite`,
    `Worldgates appear every five, to take you on your flight`,
    `But remember, the Wayfinder's power shall bloom, \nOnly if created within 30 minutes once left this void's gloom`,
    `And in each world, time flows differently, beware, \nFor these 30 minutes may change, depending on where`,
    `With kindness in thy heart, \nThe homeward bound journey shall have a promising start`,
    'SAYONARA',
  ]);
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSentence === 10) {
        clearInterval(interval);
        setGameLoop(true);
        return;
      }
      setCurrentSentence(currentSentence + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSentence]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <WispSoul />
      <Text
        color="#e1e1e1"
        fontSize={0.3}
        maxWidth={5}
        lineHeight={1.4}
        textAlign={'justify'}
        position={[4.5, 2, 0]}>
        {sentences[currentSentence]}
      </Text>
    </>
  );
};

export default Void;
