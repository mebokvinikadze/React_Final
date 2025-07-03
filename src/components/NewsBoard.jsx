import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styles from "../styles/NewsBoard.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;

const NewsBoard = ({ category, darkMode }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${API_KEY}`;
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch articles.");
                return response.json();
            })
            .then(data => {
                setArticles(data.articles || []);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [category]);

    return (
        <section className={`${styles.newsBoard} ${darkMode ? styles.dark : ""}`} aria-label="News articles">
            <h2 className={styles.heading}>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
            {loading ? (
                <div className={styles.status} role="status" aria-live="polite">
                    Loading articles...
                </div>
            ) : error ? (
                <div className={styles.status} role="alert">
                    {error}
                </div>
            ) : articles.length > 0 ? (
                <div className={styles.grid}>
                    {articles.map((news, index) => (
                        <NewsItem
                            key={news.url || index}
                            title={news.title}
                            description={news.description}
                            src={news.image}
                            url={news.url}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.status}>No articles available</div>
            )}
        </section>
    );
};

export default NewsBoard;
