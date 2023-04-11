import { useState, useEffect } from "react";
import Movie from "../components/movie";

const Home = () => {
  const [Movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?limit=10`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {Loading ? (
        <strong>lading... </strong>
      ) : (
        <div>
          <h1>My Movie App {Movies.length}</h1>

          {Movies.map((item) => {
            return <Movie key={item.id} item={item}></Movie>;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
