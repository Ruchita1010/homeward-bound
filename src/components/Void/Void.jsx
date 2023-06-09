import { useEffect, useState } from 'react';
import { Sparkles, Text } from '@react-three/drei';
import WispSoul from './ModelComponents/WispSoul';

const Void = ({ setGameLoop }) => {
  const sentences = [
    '',
    `Oh, a traveller after 100 years, such an intriguing sight!`,
    `But I have no time for delight, so heed my mystical message right`,
    `With certain powers gathered from a world's care, \nThe Starry Wayfinder will shine, a portal rare`,
    `Help those in need, and share in their power bright, \nFor the Wayfinder's creation, this kindness will ignite`,
    `Worldgates appear every four, to take you on your flight`,
    `But remember, the Wayfinder's power shall bloom, \nOnly if created within 30 minutes once left this void's gloom`,
    `And in each world, time flows differently, beware, \nFor these 30 minutes may change, depending on where`,
    `With kindness in thy heart, \nThe homeward bound journey shall have a promising start`,
    'SAYONARA',
  ];
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
      <Sparkles color={0xc5e9e8} size={4} scale={10} />
      <Text
        color="#e1e1e1"
        fontSize={0.25}
        maxWidth={6}
        lineHeight={1.4}
        textAlign={'left'}
        position={[-4.5, 1, 0]}>
        {sentences[currentSentence]}
      </Text>
    </>
  );
};

export default Void;
