import styles from './Message.module.css';

const Message = (props) => {
  const { message } = props;
  return (
    <div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Message;
