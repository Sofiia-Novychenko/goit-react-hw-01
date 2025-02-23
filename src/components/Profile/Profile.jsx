import styles from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          className={styles.avatar}
          src={image}
          alt="User avatar"
          width="200px"
        />
        <p className={styles.cardUserName}>{name}</p>
        <p className={styles.cardUserInfo}>@{tag}</p>
        <p className={styles.cardUserInfo}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span className={styles.statsText}>Followers</span>
          <span className={styles.statsText}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsText}>Views</span>
          <span className={styles.statsText}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsText}>Likes</span>
          <span className={styles.statsText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
