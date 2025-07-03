import image from '../assets/news-default-big.png';
import styles from "../styles/NewsItem.module.css";

const NewsItem = ({ title, description, src, url, darkMode }) => {
  return (
    <article className={`${styles.card} ${darkMode ? styles.dark : ""}`}>
      <img src={src ? src : image} className={styles.image} alt={title} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title.slice(0, 70)}</h3>
        <p className={styles.text}>
          {description ? description.slice(0, 120) : "Current Event, Something new just happened."}
        </p>
        <a href={url} className={styles.readMore} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </article>
  );
};

export default NewsItem;
