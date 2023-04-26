import { useState } from 'react';
import Modal from './Modal';
import styles from '../styles/StartScreen.module.css';

const StartScreen = ({ setShowStartScreen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState(null);

  const handleButtonClick = (content) => {
    setIsModalOpen(true);
    setContent(content);
  };

  const credits = `"Shiny Forest" (https://skfb.ly/6yCLo) by Whitend is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Mew 1.0" (https://skfb.ly/6YyLJ) by DreamNoms is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Blackhole" () by shikoooooooo is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Wisp soul" () by SeytanTuyux is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Tree houses" (https://skfb.ly/6WPEz) by alurisnow is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \"Flower Day 7 #3December2022Challenge" (https://skfb.ly/oBsXT) by Eduard is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  `;

  const controls = `Arrow Up: Move Forward
\nArrow Down: Move Backward
\nArrow Left: Turn Left
\nArrow Right: Turn Right
\nLeft Mouse Click: Attack/Touch as needed`;

  const about = `Embark on a Homeward Bound Journey!
    A rare portal opens in the heart of the forest, transporting you through space and time. The universe has a new traveller! (No one knows what it means to be a traveller except the mystic soul.)
    Discover new worlds, each with its own unique environment, culture, and inhabitants. Plagued by despair and turmoil, their inhabitants yearn for a glimmer of hope. Extend a helping hand, offering solace, guidance, and assistance. In return for your acts of kindness, these remarkable beings may bestow upon you extraordinary powers. These newfound abilities will prove vital in your quest to construct the mythical Starry Wayfinder Portal—the only pathway leading you back to your cherished home.
    But time is a relentless companion on your journey. You are granted a mere 30 minutes to harness the essential powers and craft the portal that will reunite you with your world. As the minutes tick away, every 4 minutes brings forth the emergence of Worldgates—gateways to new realms, brimming with untold possibilities and unforeseen challenges.
    Will you be able to gather the essential powers, create the Starry Wayfinder Portal, and make it back home in time? The fate of your homeward bound journey rests in your hands!
    Always remember, be kind and brave <3`;

  return (
    <div className={styles.start_screen}>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        content={content}
      />
      <h1 className={styles.title}>HOMEWARD BOUND</h1>
      <div className={styles.options}>
        <button
          className={styles.btn}
          onClick={() => setShowStartScreen(false)}>
          PLAY
        </button>
        <button className={styles.btn} onClick={() => handleButtonClick(about)}>
          ABOUT
        </button>
        <button
          className={styles.btn}
          onClick={() => handleButtonClick(controls)}>
          CONTROLS
        </button>
        <button
          className={styles.btn}
          onClick={() => handleButtonClick(credits)}>
          CREDITS
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
