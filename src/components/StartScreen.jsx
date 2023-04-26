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
        <button className={styles.btn}>ABOUT</button>
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
