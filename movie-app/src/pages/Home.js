import { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/movie";
import Load from "../components/load";

const MovieListBolck = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

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
        <Load />
      ) : (
        <MovieListBolck>
          {Movies.map((item) => {
            return <Movie key={item.id} item={item}></Movie>;
          })}
        </MovieListBolck>
      )}
    </div>
  );
};

export default Home;
