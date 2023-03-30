import { useState, useEffect } from "react";
import Article from "../components/article";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=8cdb9a227dd546538b1a5b716f5f0cd5`
    );
    const json = await response.json();
    setArticles(json.articles);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <div>
          <h1>Movie Article !! </h1>
          {articles.map((item, index) => (
            <Article index={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
