import styles from './DialogsItems.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItems = (props) => {
  const { name, id } = props;
  let path = '/dialogs/' + id;
  return (
    <div className={styles.dialogs}>
      <NavLink className={styles.dialog} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogsItems;
