import { useState, useEffect } from "react";
import Article from "../components/article";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=96c620953c4739e9cc8206f9da200112&targetDt=20230330`
    );
    const json = await response.json();
    setArticles(json.boxOfficeResult.dailyBoxOfficeList);
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
          <h1>Movie Article !! ({articles.length}) </h1>
          {articles.map((item) => (
            <Article item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
