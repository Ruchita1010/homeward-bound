import styles from '../styles/MessageScreen.module.css';

const MessageScreen = ({ message }) => {
  return (
    <div className={styles.message_screen}>
      <p>{message}</p>
    </div>
  );
};

export default MessageScreen;
