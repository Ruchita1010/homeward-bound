import styles from '../styles/StartScreen.module.css';

const StartScreen = ({ setShowStartScreen }) => {
  return (
    <div className={styles.start_screen}>
      <h1 className={styles.title}>HOMEWARD BOUND</h1>
      <div className={styles.options}>
        <button
          className={styles.btn}
          onClick={() => setShowStartScreen(false)}>
          PLAY
        </button>
        <button className={styles.btn}>ABOUT</button>
        <button className={styles.btn}>CONTROLS</button>
      </div>
    </div>
  );
};

export default StartScreen;
