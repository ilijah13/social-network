import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItems from './DialogsItems';
import Message from './Message';

const Dialogs = (props) => {
  const { changeMessage, sendMessage, dialogsPage } = props;

  let onSendMessageClick = () => {
    sendMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    changeMessage(text);
  };

  let dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogsItems name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>{dialogsElements}</div>
      <div>
        <div className={styles.messages}>{messagesElements}</div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={dialogsPage.newMessageText}
          ></textarea>
          <div>
            <button onClick={onSendMessageClick}>Add massage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
