import clsx from 'clsx';
import styles from './FriendListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  const StatusClsx = clsx(isOnline ? styles.active : styles.offline);
  return (
    <div className={styles.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.nameText}>{name}</p>
      <p className={StatusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
