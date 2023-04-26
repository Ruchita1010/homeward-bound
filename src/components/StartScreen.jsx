import { useState } from 'react';
import Modal from './Modal';
import styles from '../styles/StartScreen.module.css';

const StartScreen = ({ setShowStartScreen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const credits = `"Shiny Forest" (https://skfb.ly/6yCLo) by Whitend is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Mew 1.0" (https://skfb.ly/6YyLJ) by DreamNoms is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Blackhole" () by shikoooooooo is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Wisp soul" () by SeytanTuyux is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \n"Tree houses" (https://skfb.ly/6WPEz) by alurisnow is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  \"Flower Day 7 #3December2022Challenge" (https://skfb.ly/oBsXT) by Eduard is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/)
  `;

  return (
    <div className={styles.start_screen}>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        content={credits}
        contentType={'credits'}
      />
      <h1 className={styles.title}>HOMEWARD BOUND</h1>
      <div className={styles.options}>
        <button
          className={styles.btn}
          onClick={() => setShowStartScreen(false)}>
          PLAY
        </button>
        <button className={styles.btn}>ABOUT</button>
        <button className={styles.btn}>CONTROLS</button>
        <button className={styles.btn} onClick={handleButtonClick}>
          CREDITS
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
