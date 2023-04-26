import styles from '../styles/MessageScreen.module.css';

const MessageScreen = ({ message }) => {
  return (
    <div className={styles.message_screen}>
      <div className={styles.message_container}>
        {message.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default MessageScreen;
