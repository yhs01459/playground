import { useState, useEffect } from "react";
import Movie from "../components/movie";

const Home = () => {
  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=96c620953c4739e9cc8206f9da200112&targetDt=20230330`
    );
    const json = await response.json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
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
          <h1>Movie !! ({Movies.length}) </h1>
          {Movies.map((item) => (
            <Movie item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
