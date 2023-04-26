import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, setIsOpen, content, contentType }) => {
  if (!isOpen) {
    return null;
  }

  const handleCloseBtnClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <button className={styles.close_btn} onClick={handleCloseBtnClick}>
          X
        </button>
        {content.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {contentType === 'credits' && <p>Thanks a lot for the assets :D</p>}
      </div>
    </div>
  );
};

export default Modal;
